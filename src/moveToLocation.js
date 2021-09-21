class MoveToLocation{
    constructor(robot){
        // To do: Make table creation more dynamic (for-in loops)
        this.table = document.createElement('table');
        this.element = this.table

        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');

        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);

        // Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Grid X";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Grid Y";
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Speed";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        this.thead.appendChild(row_1);


        // Creating and adding data to second row of the table
        let row_2 = document.createElement('tr');
        let row_2_data_1 = document.createElement('td');
        this.xInput = document.createElement("input");
        this.xInput.setAttribute("type", "text");
        row_2_data_1.appendChild(this.xInput);

        let row_2_data_2 = document.createElement('td');
        this.yInput = document.createElement("input");
        this.yInput.setAttribute("type", "text");
        row_2_data_2.appendChild(this.yInput);
        
        let row_2_data_3 = document.createElement('td');
        this.speed = document.createElement("input");
        this.speed.setAttribute("type", "text");
        row_2_data_3.appendChild(this.speed);
        
        let row_3 = document.createElement('tr');
        this.button = new Button("Run")
        this.button.on("click", this.handleClick.bind(this))
        row_3.appendChild(this.button.element)

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        this.tbody.appendChild(row_2);
        this.tbody.appendChild(row_3);
    }

    show(){
        this.element.sstyle.display = "block"
    }

    hide(){
        this.element.sstyle.display = "none"
    }

    handleClick(){
        console.log("Moving Robot, not really")
    }

}
