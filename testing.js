
let myButton = document.getElementsByClassName("my-submit-button")[0]
let content = document.getElementsByClassName("content")[0]

// function myButtonHandler()
// {
//     console.log("Bruh, button clicked")
//     myButton.classList.remove("is-danger")
//     myButton.classList.add("is-link")
//     myButton.textContent = 'My Test'
// }
let counter = 0

let myLambda = () => {
    console.log("Bruh, button clicked")
    myButton.classList.remove("is-danger")
    myButton.classList.add("is-link")
    myButton.textContent = 'My Test'
    //Create new button (can only pass in tags that are html)
    // let newDiv = document.createElement("div")
    let newButton = document.createElement("button")
    newButton.textContent = "New Button " + counter
    content.appendChild(newButton)
    newButton.classList.add("is-primary")
    newButton.classList.add("button")
    newButton.classList.add("new-line")

    // newDiv.appendChild(newButton)
    content.appendChild(newButton)
    counter++

}


myButton.addEventListener("click", myLambda)
    

