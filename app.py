from flask import Flask, request, jsonify
from google import genai
from dotenv import load_dotenv
import os   
app = Flask(__name__)






load_dotenv()
genai.api_key = os.getenv("GEMINI_API_KEY")
# Replace with your actual API key
#genai.api_key = "YOUR_API_KEY"

@app.route('/summarize', methods=['POST'])
def summarize():
    text_data = request.json.get('text')
    response = genai.models.generate_content(
        model="gemini-2.0-flash",
        contents=f"Summarize this text by topic:\n{text_data}"
    )
    summary = response.text
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)