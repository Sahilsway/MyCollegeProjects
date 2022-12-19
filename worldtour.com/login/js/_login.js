$(document).ready(() => {

    // START VALIDATION
    $("#login-form").ready(() => {
        const loginBtn = $('#login-btn')
        const cancelBtn = $('#cancel-btn')
        const errmsg = $('#err-msg')
        const userMail = $('#user-email')
        const userPass = $('#user-pass')

        $(loginBtn).click(() => {
            console.log("login button clicked")
            
            if (required(userMail, userPass)) {
                if (validate(userMail, userPass)) {
                    // Redirect to home.html page
                    location.href = "../user/home.html"
                } else {
                // You doesn't seem to have an account would you like to create a new account
                }
            } else {
                errmsg.textContent = "Please fill all the input fields!"
                errmsg.style.color = red
            }
        })


        // Listen for the click on cancel button
        $(cancelBtn).click(() => {
            location.href = "../index.html"
        })

        // Check if any inputs field is empty
        required = (mail, pass) => {
            if ((mail.value === "") || (mail.value.length === 0) || (pass.value === "") || (pass.value.length === 0)) {
                return false
            }
            return true
        }

        // Validate user input data
        validate = (mail, pass) => {
            if (checkID(mail)) {
                if (checkPass(mail, pass)) {
                    errmsg.textContent = "You've logged in successfully!"
                    errmsg.style.color = green
                    return true
                } else {
                    errmsg.textContent = "You've entered incorrect password!"
                    errmsg.style.color = red
                    return false
                }
            } else {
                errmsg.textContent = "You've entered incorrect email or phone number!"
                errmsg.style.color = red
                return false
            }
        }

        // Check for user mail in DataBase
        checkID = (mail) => {
        
            return true/false
        }

        // Check for user password in DataBase
        checkPass = (mail, pass) => {
        
            return true/false
        }


        // Prevent auto refresh
        $("#prospects_form").submit((e) => {
            e.preventDefault()
        })
    })
})




// Listen for the click on login button
// loginBtn.addEventListener("click", () => {

//     if (required(userMail, userPass)) {
//         if (validate(userMail, userPass)) {
//             Redirect to home.html page
//             location.href = "../user/home.html"
//         } else {
//             You doesn't seem to have an account would you like to create a new account
//         }
//     } else {
//         errmsg.textContent = "Please fill all the input fields!"
//         errmsg.style.color = red
//     }
// })

// Listen for the click on cancel button
// cancelBtn.addEventListener("click", () => {
//     location.href = "../index.html"
// })

// Check if any inputs field is empty
// required = (mail, pass) => {
//     if ((mail.value === "") || (mail.value.length === 0) || (pass.value === "") || (pass.value.length === 0)) {
//         return false
//     }
//     return true
// }

// Validate user input data
// validate = (mail, pass) => {
//     if (checkID(mail)) {
//         if (checkPass(mail, pass)) {
//             errmsg.textContent = "You've logged in successfully!"
//             errmsg.style.color = green
//             return true
//         } else {
//             errmsg.textContent = "You've entered incorrect password!"
//             errmsg.style.color = red
//             return false
//         }
//     } else {
//         errmsg.textContent = "You've entered incorrect email or phone number!"
//         errmsg.style.color = red
//         return false
//     }
// }

// Check for user mail in DataBase
// checkID = (mail) => {

//     return true/false
// }

// // Check for user password in DataBase
// checkPass = (mail, pass) => {

//     return true/false
// }
