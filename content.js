chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'scrapeText') {
        let text = document.body.innerText;
        sendResponse({text: text});
    }
});