const geminiApiUrl = 'https://api.gemini.com/summarize'; // Replace with actual Gemini 2.0 Flash API endpoint

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'summarizeText') {
        const textToSummarize = request.text;

        fetch(geminiApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: textToSummarize }),
        })
        .then(response => response.json())
        .then(data => {
            const summarizedText = data.summary; // Adjust based on actual API response structure
            const blob = new Blob([summarizedText], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            chrome.downloads.download({
                url: url,
                filename: 'summary.html',
                saveAs: true
            });
            sendResponse({ success: true });
        })
        .catch(error => {
            console.error('Error summarizing text:', error);
            sendResponse({ success: false, error: error.message });
        });

        return true; // Indicates that the response will be sent asynchronously
    }
});