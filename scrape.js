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
        switch(request.type) {
            case "runScrape":
                //clickOnMore();
                expandDetails();
                break;
            default:
                console.error("Unrecognised message: ", request);
        }
    }
);

function expandDetails() {
    let loadAllCards = document.getElementById("d-cardstream-get-more");
    if(document.body.contains(loadAllCards)) {
        loadAllCards.click();
        setTimeout(expandDetails(), 5000);
    }
    else {
    /*let loadAllCards = document.getElementById("d-cardstream-get-more");
    console.log("Hello there");
    while(document.body.contains(loadAllCards)) {
        console.log("loop!");
        loadAllCards.click();
        setTimeout(function again() {
            console.log("Another round!");
            loadAllCards = document.getElementById("d-cardstream-get-more");
        }, 5000);
    }*/
        let moreButtons = document.getElementsByClassName("d-card-menu");
        //console.log(moreButtons.length);
        for(let i = 0; i < moreButtons.length; i++) {
            if(moreButtons[i].textContent.includes("More"))
                moreButtons[i].click();
        }
        console.log("Done clicking!");
    }
};

// Currently causes infinite loop. Will look into more later if necessary
/*function clickOnMore() {
    let bottomMoreButton = document.getElementById("d-cardstream-get-more");
    while(bottomMoreButton != null) {
        bottomMoreButton.click();
        bottomMoreButton = document.getElementById("d-cardstream-get-more");
        console.log("Clicked more");
    }
    console.log("No more 'mores' to click");
};*/