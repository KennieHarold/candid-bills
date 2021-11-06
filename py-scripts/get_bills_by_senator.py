import csv
import json

candidates = [
    'Marcos, Ferdinand "Bongbong" R.',
    'Dela Rosa, Ronald \"Bato\"',
    'Lacson, Panfilo M.',
    'Pacquiao, Emmanuel "Manny" D.',
    'Sotto III, Vicente C.',
    'Go, Christopher Lawrence T.',
    'Pangilinan, Francis "Kiko" N.',
    'Robredo, Maria Leonor G.'
]


def find_candidate(name):
    for i in range(0, len(candidates)):
        if candidates[i] in name:
            return i

    return -1


def main():
    with open('snb.csv', mode='r') as file:
        reader = csv.reader(file)

        data = {}

        for row in reader:
            index = find_candidate(str(row[1]))

            if index != -1:
                if candidates[index] not in data:
                    data[candidates[index]] = []

                with open('data.json', 'w') as outfile:
                    data[candidates[index]].append({
                        'congress': row[0] + 'th Congress',
                        'bill_name': row[2],
                        'bill_desc': row[3],
                        'bill_link': row[4],
                    })
                    json.dump(data, outfile)


main()
