chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // LOG THE CONTENTS HERE
    console.log(request);
  });