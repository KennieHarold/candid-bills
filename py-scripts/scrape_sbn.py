from os import times
from bs4 import BeautifulSoup
import requests
import re
import time
import csv


def main():
    csv_mode = 'a'

    with open('snb.csv', mode=csv_mode, newline="") as file:
        writer = csv.writer(file, delimiter=',')

        if csv_mode == 'w':
            headings = ['Congress',
                        'Senator',
                        'Bill Name',
                        'Summary'
                        'Download PDF']
            writer.writerow(headings)

        congress_numbers = ['16', '17', '18']
        page_num = 129

        for cnum in congress_numbers:
            while True:
                is_finished = False

                base = "http://legacy.senate.gov.ph/lis/leg_sys.aspx"
                url = base + "?congress=" + cnum + \
                    "&type=bill&p=" + str(page_num)
                bill_page = requests.get(url)
                soup = BeautifulSoup(bill_page.text, "html.parser")
                bills = soup.find(class_='alight')
                bills = bills.find_all('p')

                for bill in bills:
                    # Bill name
                    bill_name = bill.find('span').text

                    # Senator name
                    regex_str = "by(?!.*by)\s[\w,\s,\"\.\-]*$"
                    senator_name = str(bill.find('a').text)
                    senator_name = senator_name.strip()
                    senator_name = senator_name.replace('\r', '')
                    senator_name = senator_name.replace('\n', '')
                    senator_name = re.findall(regex_str, senator_name)

                    if len(senator_name) > 0:
                        senator_name = senator_name[0].split("by")[1]
                    else:
                        senator_name = "No senator found"

                    # Bill desc
                    bill_desc = str(bill.find('a')).split("<br/>")
                    bill_desc = bill_desc[1]
                    bill_desc = bill_desc.strip()
                    bill_desc = bill_desc.replace('\r', '')
                    bill_desc = bill_desc.replace('\n', '')
                    bill_desc = bill_desc.replace('</a>', '')

                    # Get PDF copy
                    pdf_base_url = "http://legacy.senate.gov.ph/lis/bill_res.aspx"
                    req_bill_name = bill_name.split(":")[0]
                    pdf_url = pdf_base_url + "?congress=" + cnum + "&q=" + req_bill_name
                    pdf_page = requests.get(pdf_url)
                    pdf_soup = BeautifulSoup(pdf_page.text, "html.parser")
                    download_url = pdf_soup.find('div', id='lis_download')

                    if download_url != None:
                        download_url = download_url.find('a')['href']
                        download_url = "http://legacy.senate.gov.ph" + download_url
                    else:
                        download_url = "No PDF found"

                    writer.writerow(
                        [cnum, senator_name, bill_name, bill_desc, download_url])

                    print(senator_name, "-", bill_name)

                    if "SBN-1:" in bill_name:
                        is_finished = True

                if is_finished:
                    page_num = 1
                    break

                page_num = page_num + 1


main()
