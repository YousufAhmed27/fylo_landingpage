let inputs = document.querySelectorAll(`input[type="text"]`);
let errors = document.querySelectorAll(".error div.err");

inputs[0].onblur = function () {
    let ch = Array.from(inputs[0].value)
    if (!ch.includes("@")) {
        errors[0].classList.remove("hide")
        inputs[0].classList.add("err")
    } else {
        errors[0].classList.add("hide")
        inputs[0].classList.remove("err")
    }
}
inputs[1].onblur = function () {
    let ch = Array.from(inputs[1].value)
    if (!ch.includes("@")) {
        errors[1].classList.remove("hide")
        inputs[1].classList.add("err")
    } else {
        errors[1].classList.add("hide")
        inputs[1].classList.remove("err")
    }
}