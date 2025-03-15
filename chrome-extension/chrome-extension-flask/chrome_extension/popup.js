const popupButton = document.getElementById('scrape-button');
const outputArea = document.getElementById('output-area');

popupButton.addEventListener('click', async () => {
    // Send a message to the content script to scrape text data
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape' }, async (response) => {
            if (response && response.textData) {
                // Send the scraped text data to the Flask backend for summarization
                const summary = await getSummary(response.textData);
                outputArea.textContent = summary;
            } else {
                outputArea.textContent = 'No text data found.';
            }
        });
    });
});

async function getSummary(textData) {
    try {
        const response = await fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: textData }),
        });
        const data = await response.json();
        return data.summary || 'Error summarizing text.';
    } catch (error) {
        console.error('Error:', error);
        return 'Error communicating with the server.';
    }
}