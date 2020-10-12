chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type === "createTab") {
      console.log(request.source);
      chrome.tabs.create({ url: request.source , active: false }, function(newTab) {
        console.log(newTab.id);
        sendResponse({ newTabId: newTab.id, url: newTab.url }); // Why is newTab.url empty but newTab.id is not?
      });
    }
    return true;
  });

  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {schemes: ['https', 'http']},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  