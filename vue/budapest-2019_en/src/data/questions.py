# -*- coding: utf-8 -*-

import csv
import io
import json
import requests

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMJyiIx5dp1vxxaqcSedzZYcGr223V-2F50ONpmZ9ULUjK9M3nEYzB__YZHvUtbFGU95hamXfMrFPP/pub?gid=1561054724&single=true&output=csv"

try:
    tmp = os.path.realpath(__file__).split("/")
    path = "/".join(tmp[:-1]) + "/"
except Exception:
    path = "/home/michal/project/voksmonitor.hu/dev/budapest-2019/answers/"

i = 0
questions = []
questions_all = []
r = requests.get(url)
r.encoding = 'utf-8'
csvio = io.StringIO(r.text, newline="")
i = 1
for row in csv.DictReader(csvio):
    if row['order'].strip() != '':
        item = {
            'id': row['id'].strip(),
            'name': row['name_en'].strip(),
            'question': row['question_en'].strip(),
            'description': row['description_en'],
            'order': float(row['order'].strip()),
            # 'weight-important': int(row['weight-important']),
            # 'weight-vaa': int(row['weight-vaa']),
            # 'tags': row['tags'].split(',')
        }
        questions.append(item)
        order = float(row['order'].strip())
    else:
        order = 1000000 + i
        i += 1
    # tags = row[7].split(', ')
    it = {
        'id': row['id'].strip(),
        'name': row['name_en'].strip(),
        'question': row['question_en'].strip(),
        'description': row['description_en'],
        'order': order,
        # 'weight-important': int(row['weight-important']),
        # 'weight-vaa': int(row['weight-vaa']),
        # 'tags': row['tags'].split(',')
    }
    questions_all.append(it)

questions = sorted(questions, key=lambda x: x['order'])
questions_all = sorted(questions_all, key=lambda x: x['order'])
# print questions

# save file
with open(path + 'questions.json', 'w') as outfile:
    json.dump(questions, outfile, ensure_ascii=False)
with open(path + 'questions_all.json', 'w') as outfile:
    json.dump(questions_all, outfile, ensure_ascii=False)
