import os

path = "/home/michal/project/voksmonitor.hu/www/2018-es-orszaggyulesi-valasztas/questions/"

for i in range(101, 155):
    command = "chromium-browser --headless --disable-gpu --screenshot --hide-scrollbars --window-size=952,900 --save-to-png=q50.png http://localhost/michal/project/voksmonitor.hu/www/2018-es-orszaggyulesi-valasztas/questions/questions.php?qid=" + str(i)
    os.system(command)

    command = "cp screenshot.png " + path + "questions/question_" + str(i) + ".png"
    os.system(command)
    print(i)
