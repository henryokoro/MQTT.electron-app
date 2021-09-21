

///////////////////////////////////////////////////
// buttonDict - a dictionary of key names and placeholders
//              keys are used as button text and
//              values are used as button placeholders
// asyncFunction - function to call when button got Clicked
// title      - title to use for the drop down row
class FormGenerator extends EventEmitter{
    constructor(asyncFunction, fieldList, description){
        super()
        this.form = new Form()
        this.description = new Text("", 6)
        if(description != undefined) this.description.setValue(description)

        this.container = new Container()
        this.element = this.container.element
        this.fieldList = fieldList
        this.asyncFunction = asyncFunction

        this.addFields(this.fieldList)
    
        this.runButton = new Button("Run")
        this.runButton.on("click", this.handleRunClick.bind(this))
        
        this.output = new Text("",6)

        this.container.appendChild(this.description.element)
        this.container.appendChild(this.form.element)
        this.container.appendChild(this.output.element)
        this.container.appendChild(this.runButton.element)
    }

    enable(){
        this.enableRun()
    }

    enableRun(){
        this.runButton.enable()
    }

    disable(){
        this.disableRun()
    }
    disableRun(){
        this.runButton.disable()
    }

    disableAndPulseRun(){
        this.runButton.disable()
        this.runButton.startPulse()
    }
    stopPulse(){
        this.runButton.stopPulse()
    }
    pulse(){
        this.runButton.startPulse()
    }
    startPulse(){
        this.runButton.startPulse()
    }

    async handleRunClick(){
        this.disableAndPulseRun()
        this.output.setColor("grey")
        this.output.setValue("Running")
        let fieldValues = []
        let fieldKeys = Object.keys(this.fieldList)
        for( let i = 0; i < fieldKeys.length; i++){
            fieldValues.push(this.form.getValue(fieldKeys[i]))
        }
        
        try{
            this.emit("click", ...fieldValues)
            let data = await this.asyncFunction(...fieldValues)
            this.output.setColor("green")
            this.output.setValue("Sent")
            if(data == undefined){
                this.output.setColor("red")
                if(data.desc == undefined) this.output.setValue("Error occured")
                else this.output.setValue(data.desc)
                this.emit("error", data.desc)
                this.stopPulse()
            }
            else{
                this.enableRun()
                this.stopPulse()
            }
            this.emit("done")
        } catch(error){
            this.output.setColor("red")
            this.output.setValue(error)
            console.error(error)
            this.emit("error", error)
            this.stopPulse()
        }
    }

    addFields(fieldList){
        let fieldKeys = Object.keys(fieldList)
        for( let i = 0; i < fieldKeys.length; i++){
            let placeholder = fieldList[fieldKeys[i]]
            if(placeholder.indexOf(",") > -1){
                let options = placeholder.split(",")
                this.form.addRadio(fieldKeys[i], options)
            }else if(placeholder.indexOf(".") > -1){
                let options = placeholder.split(".")
                this.form.addCheckboxes(fieldKeys[i], options)
            } else if(placeholder.indexOf("/") > -1){
                let options = placeholder.split("/")
                if(options.length == 2){
                    this.form.addSwitch(fieldKeys[i], options)
                } else {
                    this.form.addSelect(fieldKeys[i], options)
                }
            } else if(placeholder != ""){
                this.form.addInput(fieldKeys[i], placeholder)
            } else this.form.addInput(fieldKeys[i])
        }
    }
}
