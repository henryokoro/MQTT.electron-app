class Button{
    constructor(buttonText){
        this.button = document.createElement("button")
        this.button.textContent = buttonText
        this.button.classList.add("is-primary")
        this.button.classList.add("button")
        this.button.classList.add("new-line")
        //Makes the event listener happen within this class instance
        this.button.addEventListener("click",this.handleClick.bind(this))
        this.element = this.button.element
    }


    handleClick(){
        console.log(this.button.textContent)
    }



}