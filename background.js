chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // LOG THE CONTENTS HERE
    console.log(request);
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