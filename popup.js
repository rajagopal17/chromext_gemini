document.getElementById("scrapeButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["content.js"]
      },
      () => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, (response) => {
          if (response && response.data) {
            downloadData(response.data);
          }
        });
      }
    );
  });
});

function downloadData(data) {
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "scraped_data.txt";
  a.click();
  URL.revokeObjectURL(url);
}
