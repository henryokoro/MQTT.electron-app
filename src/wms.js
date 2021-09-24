const MQTT = require('./async-mqtt');

const wmsConnectButton = document.getElementById("wmsConnectButton");
const botMetrics = document.getElementById("botMetrics");
const botMovement = document.getElementById('botMovement');
const wmsBotIdInput = document.getElementById('wmsBotIdInput');
const wmsScanPodButton = document.getElementById('wmsPodIdButton');
const wmsLiftPodButton = document.getElementById('wmsLiftPodButton');
const wmsLiftPodInput = document.getElementById('wmsLiftPodInput');

const MVH_BROKER_ADDRESS = 'http://172.16.152.100:1883/'

async function main(){
    // Connect to MQTT Broker
    const client = await MQTT.connect(MVH_BROKER_ADDRESS);
    console.log("Starting Connection");
    try{
        await client.publish("hello", "it works");
        console.log('succesful broker connection');
    } catch(error){
        console.error(error);      
    }


    // Your code to run since DOM is loaded and ready
    wmsConnectButton.addEventListener('click', (event) => {
        event.preventDefault(); //stop bulma from running default code

        let robot = new Robot(wmsBotIdInput.value, client)
        let moveToLocationUI = new MoveToLocation(robot)
        let botMetricsUI = new BotMetrics(robot)
        let scanPodUI = new ScanForPodId(robot,botMetricsUI);
       
        botMetrics.appendChild(botMetricsUI.element)
        botMovement.appendChild(moveToLocationUI.element)
        wmsScanPodButton.appendChild(scanPodUI.element);
        
    })

    wmsLiftPodButton.addEventListener('click', (event) => {
        let liftPodUI = new LiftPod(wmsLiftPodInput.value);
        wmsLiftPodButton.appendChild(liftPodUI.element);
    })
}

//Runs code once HTML is loaded 
document.addEventListener("DOMContentLoaded", function (event) {
  main()
});
