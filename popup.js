// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
const console = {
  log: (info) => chrome.extension.getBackgroundPage().console.log(info),
};

/*async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}*/

let scrapeButton = document.getElementById('scrapeData');

scrapeButton.onclick = function() {
    let url =chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0].url == 'https://alexa.amazon.com/spa/index.html#cards') {
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(tabs[0].id, {type: "runScrape"})
      }
      else {
        //chrome.tabs.create({ url: 'https://alexa.amazon.com', active: false });
        let newTabId = null;
        chrome.tabs.create({url: 'https://alexa.amazon.com'}, function(newTab) {
          alert ("hello")
          console.log(newTab.id);
          console.log("hello")
          chrome.tabs.sendMessage(newTab.id, {type: "runScrape"});
          });
        //console.log(newTabId);
        /*function sleep(milliseconds) {
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < milliseconds);
        }
        sleep(5000);*/
        
        //f().then(console.log("Hello"));
        //console.log("Hello");
        //chrome.tabs.sendMessage(newTabId, {type: "runScrape"});
        
      }
    });
    //console.log(url)
    //chrome.tabs.create({ url: 'https://alexa.amazon.com' });
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //    chrome.tabs.sendMessage(tabs[0].id, {type: "runScrape"})
    //});
};