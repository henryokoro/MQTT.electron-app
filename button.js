class Button{
    constructor(buttonText,hostname){
        this.button = document.createElement("button")
        this.button.textContent = buttonText
        this.button.classList.add("is-primary")
        this.button.classList.add("button")
        this.button.classList.add("new-line")
        //Makes the event listener happen within this class instance
        this.button.addEventListener("click",this.handleClick.bind(this))
        this.element = this.button
        this.hostname = hostname
    }


    handleClick(){
        console.log("Button hostname is: " + this.hostname)
    }



}