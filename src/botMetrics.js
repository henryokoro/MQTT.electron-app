class BotMetrics{
    constructor(robot){

        this.table = document.createElement('table');
        this.element = this.table;
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');

        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);

        // Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Bot Metric";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Output";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        this.thead.appendChild(row_1);

        //TODO: For loop these operations for cleanup
        // Creating and adding data to second row of the table
        let row_2 = document.createElement('tr');
        this.row_2_data_1 = document.createElement('td');
        this.row_2_data_1.innerHTML = `X`;
        this.row_2_data_2 = document.createElement('td');

        let row_3 = document.createElement('tr');
        this.row_3_data_1 = document.createElement('td');
        this.row_3_data_1.innerHTML = `Y`;
        this.row_3_data_2 = document.createElement('td');
            
        let row_4 = document.createElement('tr');
        this.row_4_data_1 = document.createElement('td');
        this.row_4_data_1.innerHTML = `botDir`;
        this.row_4_data_2 = document.createElement('td');
        
        let row_5 = document.createElement('tr');
        this.row_5_data_1 = document.createElement('td');
        this.row_5_data_1.innerHTML = `batt`;
        this.row_5_data_2 = document.createElement('td');

        let row_6 = document.createElement('tr');
        this.row_6_data_1 = document.createElement('td');
        this.row_6_data_1.innerHTML = `botID`;
        this.row_6_data_2 = document.createElement('td');

        let row_7 = document.createElement('tr');
        this.row_7_data_1 = document.createElement('td');
        this.row_7_data_1.innerHTML = `ttStatus`;
        this.row_7_data_2 = document.createElement('td');

        let row_8 = document.createElement('tr');
        this.row_8_data_1 = document.createElement('td');
        this.row_8_data_1.innerHTML = `podOrient`;
        this.row_8_data_2 = document.createElement('td');

        let row_9 = document.createElement('tr');
        this.row_9_data_1 = document.createElement('td');
        this.row_9_data_1.innerHTML = `podID`;
        this.row_9_data_2 = document.createElement('td');

        let row_10 = document.createElement('tr');
        this.row_10_data_1 = document.createElement('td');
        this.row_10_data_1.innerHTML = `cmdCompId`;
        this.row_10_data_2 = document.createElement('td');

        let row_11 = document.createElement('tr');
        this.row_11_data_1 = document.createElement('td');
        this.row_11_data_1.innerHTML = `resultClass`;
        this.row_11_data_2 = document.createElement('td');

        let row_12 = document.createElement('tr');
        this.row_12_data_1 = document.createElement('td');
        this.row_12_data_1.innerHTML = `resultCode`;
        this.row_12_data_2 = document.createElement('td');

        
        row_2.appendChild(this.row_2_data_1);
        row_2.appendChild(this.row_2_data_2);
        row_3.appendChild(this.row_3_data_1);
        row_3.appendChild(this.row_3_data_2);
        row_4.appendChild(this.row_4_data_1);
        row_4.appendChild(this.row_4_data_2);
        row_5.appendChild(this.row_5_data_1);
        row_5.appendChild(this.row_5_data_2);
        row_6.appendChild(this.row_6_data_1);
        row_6.appendChild(this.row_6_data_2);
        row_7.appendChild(this.row_7_data_1);
        row_7.appendChild(this.row_7_data_2);
        row_8.appendChild(this.row_8_data_1);
        row_8.appendChild(this.row_8_data_2);
        row_9.appendChild(this.row_9_data_1);
        row_9.appendChild(this.row_9_data_2);
        row_10.appendChild(this.row_10_data_1);
        row_10.appendChild(this.row_10_data_2);
        row_11.appendChild(this.row_11_data_1);
        row_11.appendChild(this.row_11_data_2);
        row_12.appendChild(this.row_12_data_1);
        row_12.appendChild(this.row_12_data_2);
        
        this.tbody.appendChild(row_2);
        this.tbody.appendChild(row_3);
        this.tbody.appendChild(row_4);
        this.tbody.appendChild(row_5);
        this.tbody.appendChild(row_6);
        this.tbody.appendChild(row_7);
        this.tbody.appendChild(row_8);
        this.tbody.appendChild(row_9);
        this.tbody.appendChild(row_10);
        this.tbody.appendChild(row_11);
        this.tbody.appendChild(row_12);
        
        this.robot = robot
        this.robot.on(ROBOT_EVENT_STATUS, this.handleStatus.bind(this))
    }

    show(){
        this.element.style.display = "block"
    }

    hide(){
        this.element.style.display = "none"
    }

    handleStatus(status){
        console.log("Bot Metrics updating")
        console.log(status)
        this.row_2_data_2.innerText = status.x
        this.row_3_data_2.innerText = status.y
        this.row_4_data_2.innerText = status.botDirection
        this.row_5_data_2.innerText = status.batteryCharge
        this.row_6_data_2.innerText = status.botId;
        this.row_7_data_2.innerText = status.turntableLiftedState;
        this.row_8_data_2.innerText = status.podFacing;
        this.row_9_data_2.innerText = "Coming Soon";
        this.row_10_data_2.innerText = status.instance;
        this.row_11_data_2.innerText = status.resClass;
        this.row_12_data_2.innerText = status.resCode;
        
    }

    setPodId(podId){
        this.row_9_data_2.innerText = podId;
    }
}