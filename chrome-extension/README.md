# Chrome Extension for Text Scraping and Summarization

This Chrome extension is designed to scrape text data from a webpage and summarize it using Gemini 2.0 Flash. The summarized content can then be downloaded in HTML format.

## Project Structure

```
chrome-extension
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
└── README.md
```

## Files Overview

- **manifest.json**: Contains metadata about the Chrome extension, including its name, version, permissions, and the scripts that will be used.

- **popup.html**: Defines the HTML structure for the extension's popup interface that appears when the extension icon is clicked.

- **popup.js**: Contains the JavaScript code that handles the logic for the popup interface, including user interactions and communication with other scripts.

- **content.js**: Responsible for scraping text data from the active webpage using Beautiful Soup. It interacts with the DOM to extract the required information.

- **background.js**: Runs in the background and manages events, such as listening for messages from the popup or content scripts, and handling the summarization process with Gemini 2.0 Flash.

## Setup Instructions

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the `chrome-extension` directory.
5. The extension should now be loaded and ready for use.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. The popup interface will appear. Click the button to scrape text data from the current webpage.
3. The scraped data will be sent to Gemini 2.0 Flash for summarization.
4. Once the summarization is complete, you will have the option to download the summarized content in HTML format.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the extension.

## License

This project is licensed under the MIT License. See the LICENSE file for details.