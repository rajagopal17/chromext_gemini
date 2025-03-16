import requests
from bs4 import BeautifulSoup
##########new code####################
from IPython import get_ipython
from IPython.display import display
from google.colab import files
from bs4 import BeautifulSoup
import requests
import os
import json
from google import genai

from dotenv import load_dotenv
load_dotenv()
gemini_api_key = os.getenv("GEMINI_API_KEY")
genai.client.set_api_key(gemini_api_key)    



###########end of new code####################

def scrape_website(url, output_path):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    text_data = "\n".join([p.get_text() for p in soup.find_all("p")])

    #below code is commented to accomodate the new change
    #with open(output_path, "w", encoding="utf-8") as file:
    #    file.write(text_data)

    #start of new code ########################
    prompt = f"""
    You are an editor and can summarize  text as per the topic. You are given text which
    may have different topics and you need to summarize in a very concise way.
    Please summarize the following: {text data} 
    Provide the summary in Markdown format.
    """
    response = genai.client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )

    summary = response.text

    with open(output_path, "w", encoding="utf-8") as file:
        #file.write(text_data + "\n\n" + summary)
        file.write("Summary: " + summary)
    #end of new code ##########################     