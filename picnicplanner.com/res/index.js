function show() {
    document.getElementsByClassName("login-container").style.display = "block"
    document.getElementsByClassName("index-container").style.opacity = '60%'
}

function closeForm() {
    document.getElementsByClassName("login-container").style.display = none
}

// JavaScript for forms

function getotp() {
    // Send otp to the user provided email and phone number

    document.getElementById("getotp-form").style.display = none
    document.getElementById("verify-otp-form").style.display = none
}

