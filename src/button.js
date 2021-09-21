const EventEmitter = require('events');

class Button extends EventEmitter{
    constructor(text){
        super()
        this.element = document.createElement("a")
        this.element.textContent = text
        this.element.addEventListener("click", this.handleClick.bind(this))

        // Styling
        this.element.classList.add("button")
        this.element.classList.add("is-primary")
        this.color = "teal"
    }
    setColor(color){
        this.element.classList.remove(this.color)
        this.element.classList.add(color)
        this.color = color
    }
    handleClick(){
        this.emit("click")
    }
    enable(){
        this.element.classList.remove("disabled")
    }
    disable(){
        this.element.classList.add("disabled")
    }
    pulse(){
        this.startPulse()
    }
    startPulse(){
        this.element.classList.add("pulse")
    }
    stopPulse(){
        this.element.classList.remove("pulse")
    }

    setText(value){
        this.element.textContent = value
    }
    set text(value){
        this.element.textContent = value
    }
    get text(){
        return this.element.textContent
    }
}