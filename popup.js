// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
const console = {
  log: (info) => chrome.extension.getBackgroundPage().console.log(info),
};

let scrapeButton = document.getElementById('scrapeData');

scrapeButton.onclick = function() {
  let url =chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].url === 'https://alexa.amazon.com/spa/index.html#cards') {
      console.log("Query: " + tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id, {type: "runScrape"});
    }
    else {
      chrome.runtime.sendMessage({source: "https://alexa.amazon.com/spa/index.html#cards", type: "createTab"}, 
      function(response) {
        console.log(response);
        if (response.url === 'https://alexa.amazon.com/spa/index.html#cards') {
          console.log("Hello there!");
          chrome.tabs.sendMessage(response.newTabId, {type: "runScrape"});
        }
      });
      /* chrome.tabs.create({ url: 'https://alexa.amazon.com', active: false }, function(newTab) {
        console.log("Hi");
          // This executes only after jQuery has been injected and executed
        chrome.tabs.executeScript(newTab.id, {file:"scrape.js"}, function() {
          console.log("Hi 1");
          // This executes only after your content script executes
          chrome.tabs.sendMessage(newTab.id, {type: "test"});
        });
      }); */
    }
  });
  //console.log(url)
  //chrome.tabs.create({ url: 'https://alexa.amazon.com' });
  //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //    chrome.tabs.sendMessage(tabs[0].id, {type: "runScrape"})
  //});
};