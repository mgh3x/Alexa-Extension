let audio= document.getElementsByClassName("customer-transcript");
if(audio.length == 0)
    chrome.runtime.sendMessage("you suck");
for(let i = 0; i < audio.length; i++) {
    chrome.runtime.sendMessage(audio[i].innerText);
}