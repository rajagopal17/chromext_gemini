// This script will be injected into the web page to scrape data
function scrapeData() {
  // Example: scrape all text from paragraphs
  let data = "";
  document.querySelectorAll("p").forEach(p => {
    data += p.innerText + "\n";
  });
  return data;
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    const data = scrapeData();
    sendResponse({ data: data });
  }
});
