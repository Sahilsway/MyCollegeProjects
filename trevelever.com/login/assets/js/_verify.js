// Redirect to verify_otp-form
function preventReload(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Validate the form
    const user_email = document.getElementById("user-email")
    const user_phone = document.getElementById("user-phone")
    const err_msg = document.getElementById("err-msg")
    let message = "Please enter your email and phone number!"
    document.getElementById("sub-sign-btn").onclick = () => {
        if(validate_email(user_email.value)) {
            if(checkDB(user_email.value)) {
                submitData()
                location.href = "/worldtour.com/login/_otp.html"
            }else {
                message = "Your email id is already registered, You can login instead"
                err_msg.style.color = red
            }
        }
        // 
        console.log("Clicked")
    }

    function validate_email(email) {
        if(email == "") {
            message = "Email id can't be blank"
            err_msg.style.color = red
            return false
        } else if(email != /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
            message = "Enter a valid email address"
            err_msg.style.color = red
            return false
        } else {
            return true
        }
        err_msg.textContent = message
    }
    function submitData() {
        // POST   --->   (user_email.value)
        // POST   --->   (user_phone)
    }

    function checkDB(email, pass) {
        // User doesn't exist
        return true

        // User exist
        return false
    }
}

