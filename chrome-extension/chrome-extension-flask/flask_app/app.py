from flask import Flask, request, jsonify
from flask_cors import CORS
from models.llm import summarize_text
import requests
from bs4 import BeautifulSoup  # Import BeautifulSoup

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape_and_summarize():
    url = request.json.get('url')
    
    # Scrape text data from the provided URL
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to retrieve the webpage'}), 400
    
    soup = BeautifulSoup(response.content, 'html.parser')  # Parse the HTML content
    text_data = soup.get_text()  # Extract all text from the HTML
    
    # Summarize the text data using the LLM
    summary = summarize_text(text_data)
    
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)