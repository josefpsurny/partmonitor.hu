# coding: utf-8

import csv
import io
import json
import logging
import os
import re
import requests
from slugify import slugify
import time

logger = logging.getLogger('simple_example')
logger.setLevel(logging.DEBUG)

try:
    tmp = os.path.realpath(__file__).split("/")
    path = "/".join(tmp[:-1]) + "/"
except Exception:
    path = ""

path = "/home/michal/project/voksmonitor.hu/www/2018-es-orszaggyulesi-valasztas/backend/"

try:
    with open(path + "settings.json", encoding="utf-8") as f:
        settings = json.load(f)
except Exception as e:
    logger.exception(e)
    print(e)

answers_url = settings['answers_url']  # url of the CSV
acc = settings['answers_codes_column']  # answers codes columns
astep = settings['answers_step']  # step in answers (basically number of subquestions for each question in questionnaire)
afirst = settings['answers_first']  # first column with answer
nq = settings['number_of_questions']  # number of questions
voters_url = settings['voters_url']  # url of the CSV
questions_url = settings['questions_url']  # url of questions


def vote2vote(vote):
    # print(settings['yes'])
    if vote == settings['yes']:
        return 1
    if vote == settings['no']:
        return -1
    else:
        return 0


# read questions
r = requests.get(questions_url)
r.encoding = 'utf-8'
csvio = io.StringIO(r.text, newline="")
qcol2id = {}
for row in csv.DictReader(csvio):
    print(row)
    if row['id'] != "":
        qcol2id[row['id']] = row['id']


# read voters
voters = {}
r = requests.get(voters_url)
r.encoding = 'utf-8'
csvio = io.StringIO(r.text, newline="")
for row in csv.DictReader(csvio):
    voter = {
        'id': row['id'].strip(),
        'name': row['name'].strip(),
        'abbreviation': row['abbreviation'].strip(),
        'picture': settings['picture_prepend'] + row['picture'].strip() + settings['picture_append'],
    }
    voters[row['code'].strip()] = voter  # secret code column


# print(voters)


# get votes and details (comments)
i = 0
details = {}
print("mismatching codes:")
r = requests.get(answers_url)
r.encoding = 'utf-8'
csvio = io.StringIO(r.text, newline="")
for row in csv.reader(csvio):
    if i == 0:
        questions = {}  # col: id
        for j in range(0, nq):
            col = (afirst + astep * j)
            questions[col] = qcol2id[re.search('\d*', row[col]).group(0)]
        # print(questions)
    else:
        try:
            votes = {}
            voter_id = voters[row[acc].strip()]['id']
            details[voter_id] = {}
            for key in questions:
                qid = questions[key]
                # print(qid)
                votes[qid] = vote2vote(row[key])
                if row[key + 1].strip() != "":
                    details[voter_id][qid] = row[key + 1].strip()
            # print(votes)
            voters[row[acc].strip()]['votes'] = votes
        except Exception:
            print(row[acc].strip())
            print(row[acc])
    i = i + 1

# print(voters)


# reorder as list and deselect voters with no votes:
print("not answered:")
data = []
nodata = []
for key in voters:
    #    print(key)
    try:
        voters[key]['votes']
        #        print(voters)
    except Exception:
        print(voters[key]['family_name'])  # note: must be ASCII for running from PHP
#        del voters[key]['code']
        nodata.append(voters[key])
#        print(nodata)
    else:
        #        del voters[key]['code']
        data.append(voters[key])
#        print(data)
# print('**')

# time.sleep(10)
# order alphabetically
data = sorted(data, key=lambda x: x['abbreviation'])
nodata = sorted(nodata, key=lambda x: x['abbreviation'])

# array to obj
dataout = {}
for item in data:
    dataout[item['id']] = item

# db-like file for R
votesdb = []
for item in data:
    for key in item['votes']:
        votesdb.append({"votes": item['votes'][key], "voter": int(item['id']), "question": int(key)})


# obj 2 arrays:
def obj2array(obj):
    arr = []
    for k in obj:
        arr.append(obj[k])
    return arr


for k in dataout:
    dataout[k]['details'] = details[k]

# save files
try:
    with open(path + 'answers.json', 'w') as outfile:
        json.dump(obj2array(dataout), outfile, ensure_ascii=False, sort_keys=True)
    with open(path + 'noreply.json', 'w') as outfile:
        json.dump(nodata, outfile, ensure_ascii=False, sort_keys=True)
    with open(path + 'details.json', 'w') as outfile:
        json.dump(details, outfile)
    with open(path + 'matrix.json', 'w') as outfile:
        json.dump(votesdb, outfile)
except Exception as e:
    print(e)
