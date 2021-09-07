
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
    let newButton = new Button("My Button " + counter,counter)
    content.appendChild(newButton.element)
    counter++

}


myButton.addEventListener("click", myLambda)

// Promises

function delay(t,v){
    return new Promise(function(resolve,reject){
        reject("Timeout error")
        //setTimeout(resolve.bind(null,v),t)
    });
}

function main(){
    console.log(Date())
    delay(5000)
        .then( () => {
            console.log("5 seconds have passed")
            console.log(Date())
        })
        .catch((error) => {
            console.log(error)
        })

}
    

main()