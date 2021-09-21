class Container{
    constructor(){
        this.element = document.createElement("div")
        this.element.classList.add("row")

        this.top = document.createElement("div")
        this.top.classList.add("col")
        this.top.classList.add("s12")

        this.left = document.createElement("div")
        this.left.classList.add("col")
        this.left.classList.add("s6")
        this.left.classList.add("fullHeight")
        this.left.classList.add("valign-wrapper")

        this.right = document.createElement("div")
        this.right.classList.add("col")
        this.right.classList.add("s6")
        this.right.classList.add("fullHeight")
        this.right.classList.add("valign-wrapper")

        this.element.appendChild(this.top)
        this.element.appendChild(this.left)
        this.element.appendChild(this.right)
    }
    appendChild(element){
        this.element.appendChild(element)
    }
    appendChildTop(element){
        this.top.appendChild(element)
    }
    appendChildLeft(element){
        this.left.appendChild(element)
    }
    appendChildRight(element){
        this.right.appendChild(element)
    }
}