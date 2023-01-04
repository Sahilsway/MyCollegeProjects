document.getElementById("login-btn").onclick = () => {
    // Scroll down
}

document.getElementById("about-btn").onclick = () => {
    // Scroll down
}

document.getElementById("contact-btn").onclick = () => {
    // Scroll down
}

document.getElementById("signup-btn").onclick = () => {
    location.href = "./login/_verify.html"
}

/*--------------*\
    LOGIN FORM
\*--------------*/
let form = document.getElementById('login-form');
form.addEventListener('submit', preventReload);

function preventReload(event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Validate the form
    const user_email = document.getElementById("user-email")
    const user_pass = document.getElementById("user-pass")
    const err_msg = document.getElementById("err-msg")
    let message = "Please enter your email and password!"
    document.getElementById("sub-login-btn").onclick = () => {
        if(validate_email(user_email.value)) {
            if(validate_pass(user_pass.value)) {
                if(checkDB(user_email.value)) {
                    location.href = "./user/home.html"
                }else {
                    message = "Your email Id is not registered, You can create a new account instead"
                    err_msg.style.color = red
                }
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

    function validate_pass(pass) {
        if(pass.length < 8) { 
            message = "Password must be at least 8 characters"
            err_msg.style.color = red
            return false
        } else if(pass.search(/[a-z]/) < 0) { 
            message = "Passwrd must contain at least one lowercase letter"
            err_msg.style.color = red
            return false 
        } else if(pass.search(/[A-Z]/) < 0) { 
            message = "Password must contain at least one uppercase letter"
            err_msg.style.color = red
            return false
        } else if(pass.search(/[0-9]/) < 0) { 
            message = "Password must contain at least one number"
            err_msg.style.color = red
            return false
        } else {
            return true
        }
        err_msg.textContent = message
    }
}

function checkDB(email, pass) {
    // User exist
    return true
    
    // User doesn't exist
    return false
}

// Newsletter
let newsemail = []
const news_user_email = document.getElementById("news-mail")
document.getElementById("sup-btn").onclick = () => {
    newsemail.push(news_user_email.value)
}
