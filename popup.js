// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
const console = {
  log: (info) => chrome.extension.getBackgroundPage().console.log(info),
};

let scrapeButton = document.getElementById('scrapeData');

scrapeButton.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "runScrape"})
    });
};