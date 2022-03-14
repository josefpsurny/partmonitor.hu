import csv
import json

path = "/home/michal/project/voksmonitor.hu/www/2018-es-orszaggyulesi-valasztas/backend/"

with open(path + "answers.json") as fin:
    answers = json.load(fin)
answers_obj = {}
for row in answers:
    answers_obj[row['id']] = row

with open(path + "questions.json") as fin:
    questions = json.load(fin)

with open(path + "table.csv", "w") as fout:
    csvw = csv.writer(fout)
    item = ['', '']
    ordered = []
    for k in answers_obj.keys():
        ordered.append(k)
        item.append(answers_obj[k]['abbreviation'])

    csvw.writerow(item)
    for i in range(0, 45):
        item = [questions[i]['name'], questions[i]['question']]
        for k in ordered:
            item.append(answers_obj[k]['votes'][str(questions[i]['id'])])
        csvw.writerow(item)

        print(answers_obj[k])
