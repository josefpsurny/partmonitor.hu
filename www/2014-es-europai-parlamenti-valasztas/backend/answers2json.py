# -*- coding: utf-8 -*-

import csv
import json
import re
from slugify import slugify

from pdb import set_trace

def vote2vote (vote):
  if vote == 'Igen':
    return 1
  if vote == 'Nem':
    return -1
  else:
    return 0

# read voters
i = 0
voters = {}
with open('source/voters.tsv','r') as f:
  csvreader = csv.reader(f,delimiter="\t")
  for row in csvreader:
    if i == 0:
      nothing = 0
    else:
      voter = {
        'id': row[0].strip(),
        'name': row[1].strip(),
        'short_name': row[2].strip(),
        'code': row[3].strip(),
        'friendly_name': slugify(row[2].strip())
      }
      voters[str(voter['code'])] = voter
    i = i + 1

#get votes and details (comments)
i = 0
details = {}
print ("mismatching codes:")
with open('source/answers.tsv','r') as f:
  csvreader = csv.reader(f,delimiter="\t")
  for row in csvreader:
    if i == 0:
      questions = {} # col: id
      for j in range(0,30):
        col = (5 + 2*j)
        questions[col] = str(int(re.search('\d*', row[col]).group(0)) - 100) #hu speciality
      #print questions
    else:
      #if i == 11:
      #print(i,row)
      try:
        votes = {}
        for key in questions:
          # "votes[id] = vote"
          votes[questions[key]] = vote2vote(row[key])
          #details
          #print(details[voter_id])
          if row[key+1].strip() != "":
            voter_id = voters[str(row[4].strip())]['id']
            try:
              details[voter_id]
            except:
              details[voter_id] = {}
            #print('voter_id:',voter_id)
            details[voter_id][questions[key]] = row[key+1].strip()
        #print(votes)
        voters[str(row[4].strip())]['vote'] = votes
        
      except (IOError, TypeError, KeyError) as err:
        print(row[4].strip())
    i = i + 1

#print(voters)
#reorder as list and deselect voters with no votes:
print("not answered:")
data = []
nodata = []
for key in voters:
  try:
    voters[key]['vote']
  except:
    print(voters[key]['short_name'])
    del voters[key]['code']
    nodata.append(voters[key]) 
  else:
    del voters[key]['code']
    data.append(voters[key])  

#order by alphabet
data = sorted(data, key=lambda x: x['friendly_name'])    
nodata = sorted(nodata, key=lambda x: x['friendly_name'])

#array to obj
dataout = {}
for item in data:
  dataout[item['id']] = item

# db-like file for R
votesdb = []
for item in data:
  for key in item['vote']:
    votesdb.append({"vote":item['vote'][key],"voter":int(item['id']),"question":int(key)})
  
#save files 
with open('answers.json', 'w') as outfile:
  json.dump(dataout, outfile)
outfile.close()
with open('noreply.json', 'w') as outfile:
  json.dump(nodata, outfile)
outfile.close()
with open('details.json', 'w') as outfile:
  json.dump(details, outfile)
outfile.close()
with open('matrix.json', 'w') as outfile:
  json.dump(votesdb, outfile)
outfile.close()
