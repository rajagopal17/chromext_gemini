# Chrome Extension with Flask Backend for Text Summarization

This project is a Chrome extension that scrapes text data from web pages and summarizes it using the Gemini 2.0 Flash LLM. The extension consists of a frontend built with HTML and JavaScript, and a backend powered by Flask.

## Project Structure

```
chrome-extension-flask
├── chrome_extension
│   ├── manifest.json       # Metadata for the Chrome extension
│   ├── popup.html          # HTML structure for the popup interface
│   ├── popup.js            # JavaScript logic for the popup
│   └── content.js          # Content script for scraping text data
├── flask_app
│   ├── app.py              # Main entry point for the Flask application
│   ├── requirements.txt     # Python dependencies for the Flask app
│   └── models
│       └── llm.py         # Implementation for interacting with the LLM
├── README.md               # Project documentation
└── .gitignore              # Files and directories to ignore by Git
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd chrome-extension-flask
   ```

2. **Set up the Flask backend:**
   - Navigate to the `flask_app` directory.
   - Create a virtual environment (optional but recommended):
     ```
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the required dependencies:
     ```
     pip install -r requirements.txt
     ```

3. **Run the Flask application:**
   ```
   python app.py
   ```

4. **Set up the Chrome extension:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the `chrome_extension` directory.

## Usage

- Click on the extension icon in the Chrome toolbar to open the popup.
- The extension will scrape the text data from the current webpage and send it to the Flask backend for summarization.
- The summarized text will be displayed in the popup interface.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.