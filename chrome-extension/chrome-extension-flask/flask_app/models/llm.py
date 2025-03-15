from flask import request
import requests

class LLMClient:
    def __init__(self, api_key, api_url):
        self.api_key = api_key
        self.api_url = api_url

    def summarize_text(self, text, topics):
        payload = {
            "text": text,
            "topics": topics
        }
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        response = requests.post(self.api_url, json=payload, headers=headers)
        if response.status_code == 200:
            return response.json().get("summary")
        else:
            raise Exception(f"Error: {response.status_code}, {response.text}")

def get_llm_summary(text, topics):
    api_key = "YOUR_API_KEY"  # Replace with your actual API key
    api_url = "https://api.gemini.example.com/summarize"  # Replace with the actual API endpoint
    llm_client = LLMClient(api_key, api_url)
    return llm_client.summarize_text(text, topics)