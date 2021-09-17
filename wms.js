const { MqttClient } = require("mqtt");

const {connectAsync} = require('./async-mqtt');

const wmsConnectButton = document.getElementById("wmsConnectButton");
const botStatusModal = document.getElementById("botStatusModal");
const wmsUserInput = document.getElementById('wmsBotIdInput');

let isAppendChildForBotMetrics = false;

//function to parse user input
function getUserNumberInput() {
    return parseInt(wmsUserInput.value);
}

//function for WMS to connect to broker upon connect
async function connectToBrokerUponConnect() {
    try{
        let asyncClient = await connectAsync('http://10.16.128.50:1883/');
        let result = await asyncClient.publish("hello", "It works");
        console.log('succesful broker connection');
    } catch(error){
        console.error(error);
        
    }
     
}


//Runs code once HTML is loaded 
document.addEventListener("DOMContentLoaded", function (event) {
    connectToBrokerUponConnect();
    // Your code to run since DOM is loaded and ready
    wmsConnectButton.addEventListener('click', (event) => {
        event.preventDefault(); //stop bulma from running default code
        botStatusModal.style.display = "block";

        const botInfoObj = {
            x: "1",
            y: "2",
            botDirection: "South",
            botStatus: "None",
            botID: getUserNumberInput(),
            batteryPercentage: "89",
            turntableStatus: "lowered", //ternary can be used if json returns numner,true/false etc
            podOrientation: "West",
            cmdCompleteId: "200",
            resultCode: "0",
            resultClass: "0"

        };
        for (const botProperty in botInfoObj) {
            //prevent append child from appending after one use
            if (!isAppendChildForBotMetrics) {
                let wmsText = new Text(`${botProperty}: ` + botInfoObj[botProperty]);
                botStatusModal.appendChild(wmsText.element);
            }
        }
        isAppendChildForBotMetrics = true;
    })
})

