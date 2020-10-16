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
      chrome.runtime.sendMessage({source: "https://alexa.amazon.com/spa/index.html#cards", type: "createTab"}); 
    }
  });
};