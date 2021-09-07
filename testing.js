function myButtonHandler()
{
    console.log("Bruh, button clicked")
    myButton.classList.remove("is-danger")
    myButton.classList.add("is-link")
    myButton.textContent = 'My Test'
}

let myButton = document.getElementById("connectBtn")
myButton.addEventListener("click",myButtonHandler)
