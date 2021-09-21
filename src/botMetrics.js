class BotMetrics{
    constructor(){
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

        row_2.appendChild(this.row_2_data_1);
        row_2.appendChild(this.row_2_data_2);
        row_3.appendChild(this.row_3_data_1);
        row_3.appendChild(this.row_3_data_2);
        row_4.appendChild(this.row_4_data_1);
        row_4.appendChild(this.row_4_data_2);
        row_5.appendChild(this.row_5_data_1);
        row_5.appendChild(this.row_5_data_2);
        
        this.tbody.appendChild(row_2);
        this.tbody.appendChild(row_3);
    }

    show(){
        this.element.sstyle.display = "block"
    }

    hide(){
        this.element.sstyle.display = "none"
    }

    handleStatus(status){
        console.log("Bot Metrics updating")
        this.row_2_data_2.innerText = status.x
        this.row_3_data_2.innerText = status.y
        this.row_4_data_2.innerText = status.botDir
        this.row_5_data_2.innerText = status.battery
    }
}