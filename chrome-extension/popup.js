const summarizeText = async (text) => {
    const response = await fetch('https://api.gemini.com/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });
    const data = await response.json();
    return data.summary;
};

document.getElementById('scrapeButton').addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape' }, async (response) => {
            if (response && response.text) {
                const summary = await summarizeText(response.text);
                const blob = new Blob([summary], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'summary.html';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        });
    });
});