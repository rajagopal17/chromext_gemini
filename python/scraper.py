import requests
from bs4 import BeautifulSoup

def scrape_website(url, output_path):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    text_data = "\n".join([p.get_text() for p in soup.find_all("p")])

    with open(output_path, "w", encoding="utf-8") as file:
        file.write(text_data)
