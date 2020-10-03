// Initial commented out code meant for https://www.amazon.com/alexa-privacy/apd/rvh

/*if(document.readyState === 'loading') {
    chrome.runtime.addEventListener("DOMContentLoaded", printThing)
}
else {
    fire();
}

function fire() {
    let audio= document.getElementsByClassName("customer-transcript");
        if(audio.length == 0)
            chrome.runtime.sendMessage("Found no messages");
        for(let i = 0; i < audio.length; i++) {
            chrome.runtime.sendMessage(audio[i].innerText);
        }
    };

function printThing() {
    chrome.runtime.sendMessage("Nothing to report");
}*/

// Following code meant for https://alexa.amazon.com/spa/index.html#cards
async function getAlexaDom() {
    let response = await fetch("https://alexa.amazon.com/spa/index.html#cards");

    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.text();
    console.log(json);
    } 
    else
        alert("HTTP-Error: " + response.status);
}

getAlexaDom();