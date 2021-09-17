class Text {
    constructor(text, size, type="div"){
        if(size == undefined){
            size = 7
            this.element = document.createElement(type)
        } else {
            this.element = document.createElement("h" + size)
        }
        this.element.classList.add("content");
        this.element.innerText = text
    }   
    setValue(value){
        this.element.innerText = value
    }
    getValue(){
        return this.element.innerText
    }
    setColor(color){
        this.element.style.color = color
    }
}