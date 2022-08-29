import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")
const input = document.querySelector("input")
const textArea = document.querySelector("textarea")
input.addEventListener("input", (e) => {
    
    throttle(localStorage.setItem("email", e.currentTarget.value), 500)
})
textArea.addEventListener("input", (e) => {
   
    throttle(localStorage.setItem("message", e.currentTarget.value),500)
})
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("email") != 0 || localStorage.getItem("message") != 0) {
        input.value = localStorage.getItem("email");
        textArea.value = localStorage.getItem("message")
}
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInfo = {
        email: localStorage.getItem("email"),
        message: localStorage.getItem("message")
    }
    console.log(userInfo);
    localStorage.clear()
    input.value = " ";
    textArea.value = " "
})

