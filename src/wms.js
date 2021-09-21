const { MqttClient } = require("mqtt");
const {connectAsync, AsyncClient} = require('./async-mqtt');

const wmsConnectButton = document.getElementById("wmsConnectButton");
const botStatusModal = document.getElementById("botStatusModal");
const wmsUserInput = document.getElementById('wmsBotIdInput');
const wmsGridInput = document.getElementById("botGridModal");
const gridEntry = [];

let asyncMqtt = new AsyncClient;

const MVH_BROKER_ADDRESS = 'http://10.16.128.50:1883/'

let isAppendChildForBotMetrics = false;

//function to parse user input
function getUserNumberInput() {
    return parseInt(wmsUserInput.value);
}

//function for WMS to connect to broker upon connect
async function connectToBrokerUponConnect() {
    try{
        let result = await asyncClient.publish("hello", "It works");
        let asyncClient = await connectAsync(MVH_BROKER_ADDRESS);
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

        wmsGridInput.style.display = "block";
        addBotMoveGridHandler();
    })

})


async function  moveToLocationHandler(x, y , speed, safety, action){
  // Publish it here
  let json = {
    correlationId: "myCorrelation",
    x: x,
    y: y,
    maxAcceleration: "0.3",
    maxSpeed: speed,
    maxDeceleration : "0.3",
    envelope: "queue"
  }
  //Move bot
  console.log("JSONL", JSON.stringify(json))
  await asyncClient.publish(`v1/none/${getUserNumberInput()}/cmd/movetolocation`, JSON.stringify(json));
  return true
}
const renderNewBotMoveGrid = () => {
    let form = new FormGenerator(moveToLocationHandler, {
      "X":"1",
      "Y":"1",
      "Speed":"1",
      "Safety":"true~one,false~two",
      "action":"none/lift/drop/rotate90/rotate180/scanPod",
    })
    let container = document.createElement('div')
    container.classList.add("box")
    container.appendChild(form.element)


    const newBotMoveGrid = document.createElement('li');
    newBotMoveGrid.className = 'bot-move-grid-element';
    newBotMoveGrid.innerHTML = `
    <form id="rendered-form">
      <div class="rendered-form">
      <div class="formbuilder-text form-group field-GridXName">
        <label for="GridXName" class="formbuilder-text-label">Grid X</label>
        <input type="text" class="form-control" name="GridXName" access="false" maxlength="3" id="GridXName"></div>
      <div class="formbuilder-text form-group field-GridYValue">
        <label for="GridYValue" class="formbuilder-text-label">Grid Y</label>
        <input type="text" class="form-control" name="GridYValue" access="false" maxlength="3" id="GridYValue"></div>
      <div class="formbuilder-text form-group field-SpeedForm">
        <label for="SpeedForm" class="formbuilder-text-label">Speed</label>
        <input type="text" class="form-control" name="SpeedForm" access="false" id="SpeedForm"></div>
      <div class="formbuilder-select form-group field-select-1632180046425-0">
        <label for="select-1632180046425-0" class="formbuilder-select-label">Saftey Emitter<span class="formbuilder-required">*</span></label>
        <select class="form-control" name="select-1632180046425-0" id="select-1632180046425-0" required="required" aria-required="true"><option value="option-1" selected="true" id="select-1632180046425-0-0">True</option>
        <option value="option-2" selected="true" id="select-1632180046425-0-1">False</option></select></div><div class="formbuilder-button form-group field-button-1632180036719-0"><button type="button" class="btn-info btn" name="button-1632180036719-0" access="false" style="info" id="button-1632180036719-0">Go!
        </button>
      </div>
      </div>
    </form>`;

    const listRoot = document.getElementById('bot-movement');
    // listRoot.appendChild(newBotMoveGrid);
    listRoot.appendChild(container);
};

const addBotMoveGridHandler = () => {

    renderNewBotMoveGrid();

    //const gridXValue = document.getElementById('botGrid_x').value;
    const gridXValue = wmsUserInput[0].value;
    const gridYValue = wmsUserInput[1].value;
    const gridSpeedValue = wmsUserInput[2].value;
    const gridSafetyValue = wmsUserInput[3].value;
    if(gridXValue !== parseInt(gridXValue,10))
    {
        alert('Invalid Input. Not an integer!');
        return
    }
    if(parseInt(gridXValue) == 0)
    {
        alert('Invalid Input. Do not use 0!')
        return
    }
    if(gridYValue !== parseInt(gridYValue,10))
    {
        alert('Invalid Input. Not an integer!');
        return
    }
    if(parseInt(gridYValue) == 0)
    {
        alert('Invalid Input. Do not use 0!')
        return
    }
    if(gridSpeedValue !== parseInt(gridSpeedValue, 10))
    {
        alert('Invalid Input. Not an integer!');
        return
    }
    if(parseInt(gridSpeedValue) == 0)
    {
        alert('Invalid Input. Do not use 0!');
        return
    }
    if(parseInt(gridSafetyValue) !== 0 || parseInt(gridSafetyValue) !==1)
    {
        alert('Invalid Input. Make sure Safety value is either 0 or 1');
        return
    }
    
}