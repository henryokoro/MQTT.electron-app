
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
    let newButton = new Button("My Button " + counter)
    content.appendChild(newButton.element)
    counter++

}


myButton.addEventListener("click", myLambda)
    

