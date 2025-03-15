document.getElementById('summarizeBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'scrapeText'}, function(response) {
            fetch('http://localhost:5000/summarize', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({text: response.text})
            })
            .then(res => res.json())
            .then(data => {
                document.getElementById('summary').innerText = data.summary;
            });
        });
    });
});