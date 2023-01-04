// Redirect to set_pass-form

function preventReload(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Validate the form
    const user_pass = document.getElementById("user-pass")
    const user_pass_conf = document.getElementById("user-pass-conf")
    let message = "Please enter a strong password!"
    document.getElementById("set-pass-btn").onclick = () => {
        if(validate_pass(user_pass.value, user_pass_conf.value)) {
            saveData(user_pass.value)
            location.href = "/trevelever.com/user/home.html"
        }
    console.log("Clicked")
    }

    function validate_pass(pass1, pass2) {
        if(pass1 == pass2) {
            return true
        } else {
            message = "Both password should be same!"
            err_msg.style.color = red
            return false
        }
        err_msg.textContent = message
    }

    function saveData(pass) {
        // Save password in the database
        pass
    }
}

