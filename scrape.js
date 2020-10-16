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

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        debugger;
        switch(request.type) {
            case "runScrape":
                console.log("Got here!");
                expandDetails();
                break;
            default:
                console.error("Unrecognised message: ", request);
        }
    }
);

function expandDetails() {
    /*let loadAllCards = document.getElementById("d-cardstream-get-more");
    if(document.body.contains(loadAllCards)) {
        loadAllCards.click();
        setTimeout(expandDetails(), 5000);
    }*/
    //else {
    //alert("hello there!");
    let moreButtons = document.getElementsByClassName("d-card-menu");
    for(let i = 0; i < moreButtons.length; i++) {
        if(moreButtons[i].textContent.includes("More"))
            moreButtons[i].click();
    }
    console.log("Done clicking!");
    //}
};