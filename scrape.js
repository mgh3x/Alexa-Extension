let audio= document.getElementsByClassName("customer-transcript");
for(let i = 0; i < audio.length; i++) {
    chrome.runtime.sendMessage(audio[i].innerText);
}