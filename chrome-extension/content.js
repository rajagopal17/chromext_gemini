const scrapeData = () => {
    const bodyText = document.body.innerText;
    const data = {
        text: bodyText
    };
    return data;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrape") {
        const scrapedData = scrapeData();
        sendResponse(scrapedData);
    }
});