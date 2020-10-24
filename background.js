chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type === "createTab") {
      console.log(request.source);
      chrome.tabs.create({url: request.source, selected: false}, myTab => {
        function listener(tabId, changeInfo, tab) {
            // make sure the status is 'complete' and it's the right tab
            if (tabId === myTab.id && changeInfo.status == 'complete') {
              console.out("hello");
              if(!getElementById("d-main").size()) {
                alert("Element not loaded");
                //window.requestAnimationFrame(listener);
              } else {
                alert("Element loaded")
                setTimeout(function() {
                  chrome.tabs.sendMessage(tabId, {type: "runScrape"});
                  chrome.tabs.onUpdated.removeListener(listener);
                  //chrome.tabs.remove(myTab.id);
                }, 5000);
              }
            }
        };
        chrome.tabs.onUpdated.addListener(listener);
      });
      /*chrome.tabs.create({ url: request.source }, function(newTab) {
        console.log(newTab.id);
        //sendResponse({ newTabId: newTab.id, url: newTab.url });
        chrome.tabs.onUpdated.addListener(function(tabId, info) {
          //chrome.tabs.sendMessage(tabId, {type: "runScrape"});
          sendResponse({ newTabId: tabId, url: info.url }); // Why is newTab.url empty but newTab.id is not?
        });
      }); */
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
  