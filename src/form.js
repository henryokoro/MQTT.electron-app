let formCounter = 0
class Form{
    constructor(){
        this.element = document.createElement("form")
        this.fields = {}
        this.formId = formCounter
        formCounter += 1
    }
    addRadio(label, optionsArray){
        let numberOfFileds =  Object.keys(this.fields).length
        let fieldId = "form_" + this.formId + "_field_" + numberOfFileds

        let radio = {
            value: optionsArray[0]
        }
        let mainLabel = document.createElement("label")
        mainLabel.innerText = label
        this.element.appendChild(mainLabel)

        for(let i = 0; i < optionsArray.length; i++){
            let wrapper      = document.createElement("div")
            wrapper.classList.add("control")
            let labelElement = document.createElement("label")
            labelElement.classList.add("radio")

            let option = optionsArray[i]
            let alias = option
            if(option.indexOf("~") > -1){
                let split = option.split("~")
                option = split[0]
                alias = split[1]
            }

            let input = document.createElement("input")
            input.setAttribute("type", "radio")
            input.setAttribute("name", fieldId)
            input.setAttribute("id", option)
    
            let span = document.createElement("span")
            span.innerText = alias
            input.addEventListener("click", (event) => {
                radio.value = event.currentTarget.getAttribute("id")
            })

            this.element.appendChild(wrapper)
            wrapper.appendChild(labelElement)
            labelElement.appendChild(input)
            labelElement.appendChild(span)
            if(i == 0){
                input.click()
            }
        }

        this.fields[label] = radio
    }
    addSwitch(label, optionsArray){
        let row = document.createElement("div")
        row.classList.add("row")

        let col = document.createElement("div")
        col.classList.add("col")
        col.classList.add("s12")
        col.classList.add("switch")

        let labelElement = document.createElement("label")

        let leftText = optionsArray[0]
        let leftAlias = leftText
        if(leftText.indexOf("~") > -1){
            let split = leftText.split("~")
            leftText = split[0]
            leftAlias = split[1]
        }
        let rightText = optionsArray[1]
        let rightAlias = rightText
        if(rightText.indexOf("~") > -1){
            let split = rightText.split("~")
            rightText = split[0]
            rightAlias = split[1]
        }

        let leftTextField = new Text(leftAlias, 7, "span")
        let rightTextField = new Text(rightAlias, 7, "span")

        let checkbox = {
            value: optionsArray[0]
        }
        let input = document.createElement("input")
        input.setAttribute("type", "checkbox")

        let span = document.createElement("span")
        span.classList.add("lever")

        labelElement.appendChild(leftTextField.element)
        labelElement.appendChild(input)
        labelElement.appendChild(span)
        labelElement.appendChild(rightTextField.element)        

        this.fields[label] = checkbox
        this.element.appendChild(row)
        row.appendChild(col)
        col.appendChild(labelElement)
        input.addEventListener('click', (event) => {
            if (event.currentTarget.checked) {
                checkbox.value = rightText
            } else {
                checkbox.value = leftText
            }
        })
        return input
    }
    addSelect(label, optionsArray){
        let numberOfFileds =  Object.keys(this.fields).length
        let fieldId = "form_" + this.formId + "_field_" + numberOfFileds
        let row = document.createElement("div")
        row.classList.add("select")
        
        let col = document.createElement("div")
        col.classList.add("col")
        col.classList.add("s12")
        col.classList.add("input-field")
        
        let mainLabel = document.createElement("h1")
        mainLabel.innerText = label
        row.appendChild(mainLabel)

        let select = document.createElement("select")

        for( let i = 0; i < optionsArray.length; i++){
            let option = document.createElement("option")
            let optionText = optionsArray[i]
            let alias = optionText
            if(optionText.indexOf("~") > -1){
                let split = optionText.split("~")
                optionText = split[0]
                alias = split[1]
            }
            option.setAttribute("value", optionText)
            option.innerHTML = alias
            select.appendChild(option)
        }
        
        let labelElement = document.createElement("label")
        labelElement.setAttribute("for", fieldId)
        labelElement.innerHTML = label
        
        this.fields[label] = select
        this.element.appendChild(row)
        row.appendChild(select)
    }
    addCheckboxes(label, optionsArray){
        let numberOfFileds =  Object.keys(this.fields).length
        let fieldId = "form_" + this.formId + "_field_" + numberOfFileds

        let checkbox = {
            value: []
        }

        for(let i = 0; i < optionsArray.length; i++){
            let wrapper      = document.createElement("p")
            let labelElement = document.createElement("label")

            let option = optionsArray[i]
            let alias = option
            if(option.indexOf("~") > -1){
                let split = option.split("~")
                option = split[0]
                alias = split[1]
            }

            let input = document.createElement("input")
            input.setAttribute("type", "checkbox")
            input.setAttribute("name", fieldId)
            input.setAttribute("id", option)
            input.classList.add("filled-in")
    
            let span = document.createElement("span")
            span.innerText = alias
            input.addEventListener("click", (event) => {
                let value = event.currentTarget.getAttribute("id")
                if(event.currentTarget.checked){
                    checkbox.value.push(value)
                } else {
                    const index = checkbox.value.indexOf(value);
                    if (index > -1) {
                        checkbox.value.splice(index, 1);
                    }
                }
            })

            this.element.appendChild(wrapper)
            wrapper.appendChild(labelElement)
            labelElement.appendChild(input)
            labelElement.appendChild(span)
        }

        this.fields[label] = checkbox
    }
    addInput(label, placeholder){
        let numberOfFileds =  Object.keys(this.fields).length
        let fieldId = "form_" + this.formId + "_field_" + numberOfFileds
        let row = document.createElement("div")
        row.classList.add("row")

        let col = document.createElement("div")
        col.classList.add("col")
        col.classList.add("s12")
        col.classList.add("input-field")

        let input = document.createElement("input")
        input.setAttribute("id", fieldId)
        input.setAttribute("type", "text")
        if(placeholder != undefined) input.setAttribute("placeholder", placeholder)
        input.classList.add("validate")
        
        let labelElement = document.createElement("label")
        labelElement.setAttribute("for", fieldId)
        labelElement.innerHTML = label
        
        this.fields[label] = input
        this.element.appendChild(row)
        row.appendChild(col)
        col.appendChild(labelElement)
        col.appendChild(input)
        return input
    }
    getValue(label){
        return this.fields[label].value
    }
}
