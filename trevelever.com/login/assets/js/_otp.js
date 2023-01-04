// Redirect to set_pass-form

function preventReload(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Validate the form
    const email_otp = document.getElementById("email-otp")
    const err_msg = document.getElementById("err-msg")
    let message = "Please enter otp from your mail!"
    document.getElementById("verify-otp-btn").onclick = () => {
        if(validate_otp(email_otp.value)) {
            location.href = "/trevelever.com/login/set-pass.html"
        }
    console.log("Clicked")
    }

    function validate_otp(otp) {
        if(otp == "" || otp.length < 4 || otp.length < 4) {
            message = "The OTP you've entered is incorrect!"
            err_msg.style.color = red
            return false
        } else {
            // Match OTP user entered
                // If matched
                return true
                // If unmatched
                return false
        }
        err_msg.textContent = message
    }
}
