if(document.readyState === 'loading') {
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
}