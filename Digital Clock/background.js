// Create a new tab page every time the user opens a new tab
chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.url === "chrome://newtab/") {
        chrome.tabs.update(tab.id, { url: "index.html" });
    }
});