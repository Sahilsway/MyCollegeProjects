
function ep_submit() {
    document.getElementsByClassName("verify-container").style.display = none;
    document.getElementsByClassName("signup-container").style.display = block;
}

function sendotp() {
    document.querySelector("#getotp-container").style.display = "none"
    document.querySelector("#verify-container").style.display = "block"
}


function school() {
    document.querySelector("#select-school").style.display = "none"
}

function closeForm() {
    document.querySelector(".container").style.display = "none"
}