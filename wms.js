const wmsConnectButton = document.getElementById("wmsConnectButton");
const botStatusModal = document.getElementById("botStatusModal");

const botInfoObj = {
    x: "1",
    y: "2",
    botDirection: "South",
    botStatus: "None",
    botID: "205",
    batteryPercentage: "89",
    turntableStatus: "lowered", //ternary can be used if json returns numner,true/false etc
    podOrientation: "West",
    cmdCompleteId: "200",
    resultCode: "0",
    resultClass: "0"

};

//Runs code once HTML is loaded 
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    wmsConnectButton.addEventListener('click', (event) => {
        event.preventDefault(); //stop bulma from running default code
        botStatusModal.style.display = "block";
        for(const botProperty in botInfoObj)
        {
            let wmsText = new Text(`${botProperty}: ` + botInfoObj[botProperty]);
            botStatusModal.appendChild(wmsText.element);
        }
    })
})

