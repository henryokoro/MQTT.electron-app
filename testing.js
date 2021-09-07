
let myButton = document.getElementsByClassName("my-submit-button")[0]

function myButtonHandler()
{
    console.log("Bruh, button clicked")
    myButton.classList.remove("is-danger")
    myButton.classList.add("is-link")
    myButton.textContent = 'My Test'
}

myButton.addEventListener("click",myButtonHandler)
// let myButton = document.getElementsByClassName("is-danger")
