
let myButton = document.getElementsByClassName("my-submit-button")[0]
let content = document.getElementsByClassName("content")[0]

// function myButtonHandler()
// {
//     console.log("Bruh, button clicked")
//     myButton.classList.remove("is-danger")
//     myButton.classList.add("is-link")
//     myButton.textContent = 'My Test'
// }

let myLambda = () => {
    console.log("Bruh, button clicked")
    myButton.classList.remove("is-danger")
    myButton.classList.add("is-link")
    myButton.textContent = 'My Test'
    //Create new button
    let newButton = document.createElement("button")
    newButton.textContent = "New Button"
    content.appendChild(newButton)
    newButton.classList.add("is-primary")
    newButton.classList.add("button")

}



myButton.addEventListener("click", myLambda)
    

