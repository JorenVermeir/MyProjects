import urllib.request
from datetime import datetime
import urllib.response
import icalendar
from time import sleep
from asyncpushbullet import AsyncPushbullet
pb = AsyncPushbullet('o.wy23SwFScxXpZc43BOcqbe4cx5GPENYr')
opo = pb.get_device('OnePlus ONEPLUS A3003')
mydict = {}

def update():
    req = urllib.request.Request(
        'https://rooster.ucll.be/export.php?what=uurrooster_studenten&type=ical&academiejaar=2016&afdeling=536CDF44C7C4597E25E54AD2ECCC6D49&groep=5678CC7015F15AB43149C9DD14CEE4A2&unique=5061d61259e28b104225cc25257330b40b7d8b16')
    response = urllib.request.urlopen(req)
    data = response.read()
    cal = icalendar.Calendar.from_ical(data)
    for event in cal.walk('vevent'):
        summery = event.decoded('summary')
        start = event.decoded('dtstart')
        try:
            location = event.decoded('location')
        except:
            location = 'geen locatie gevonden'

        mydict[str(start)] = [location, summery]
while True:
    time = datetime.now()
    minute = time.minute
    if minute == 10:
        update()
        d = datetime(time.year, time.month, time.day, time.hour,  15, 0, 0)
        v = mydict.get(str(d)+'+00:00')
        if v is not None:
            push = opo.push_note(str(v[1]), str(v[0]) + str(d))
            print(d)
            print(v[0])
            print(v[1])
            sleep(120)

    if minute == 25:
        update()
        d = datetime(time.year, time.month, time.day, time.hour, 30, 0, 0)
        v = mydict.get(str(d)+'+00:00')

        if v is not None:
            push = opo.push_note(str(v[1]), str(v[0]) + str(d))
            print(d)
            print(v[0])
            print(v[1])
            sleep(120)

    if minute == 55:
        update()
        d = datetime(time.year, time.month, time.day, time.hour + 1, 0, 0, 0)
        v = mydict.get(str(d)+'+00:00')
        if v is not None:
            push = opo.push_note(str(v[1]), str(v[0]) + str(d))
            print(d)
            print(v[0])
            print(v[1])
            sleep(120)
