let form = document.getElementById("login-form")
let emailInput = document.getElementId('email')

console.log(form)
console.log(emailInput)

form.addEventListener('submit' , (event) => {
    event.preventDefault()
    validateEmail(emailInput)
    console.log ('event object', event)
    console.log ('form submitted!')

function validateEmail(input) {
    if input.value.includes('@')) {
        input.classList.add('.invailid')
    } else {

    }
    console.log(input)
}
