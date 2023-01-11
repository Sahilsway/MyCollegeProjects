document.getElementById("login-btn").addEventListener("click", function () {
    window.scroll({ top: 650, left: 0, behavior: 'smooth' });
});
document.getElementById("about-btn").addEventListener("click", function () {
    window.scroll({ top: 750, left: 0, behavior: 'smooth' });
});
document.getElementById("contact-btn").addEventListener("click", function () {
    window.scroll({ top: 950, left: 0, behavior: 'smooth' });
});
document.getElementById("signup-btn").onclick = () => {
    location.href = "./login/_verify.html"
}

/*--------------*\
    LOGIN FORM
\*--------------*/
// Function to validate email
function validateEmail(email) {
    // Use the regular expression to check if the email is valid
    return /^[a-zA-Z0-9.+]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z0-9-]{2,}$/.test(email);
}

// Function to validate password
function validatePassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Use the regular expression to check if the password is valid
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password);
}

// Object to store error messages
const errorMessages = {
    404: 'Email not registered',
    401: 'Incorrect password',
    default: 'Error, please try again'
};

// Listen for the submit event on the login form
document.getElementById('login-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the login form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // ************************----------------------------------------************************* \\
    
    // Validate the email
    // if (!validateEmail(email)) {
    //     document.getElementById('err-msg').textContent = 'Enter a valid email';
    //     return;
    // }

    // Validate the password
    // if (!validatePassword(password)) {
    //     if (password.length < 8) {
    //         document.getElementById('err-msg').textContent = 'Password must be at least 8 characters';
    //     } else {
    //         document.getElementById('err-msg').textContent = 'Password should contain at least one uppercase, one lowercase, and one number';
    //     }
    //     return;
    // }

    // Show the loading indicator
    document.getElementById('loading-indicator').style.display = 'block';

    // Send a POST request to the server with the form data
    fetch('./form-handler.js', {
        method: 'POST',
        body: formData
    })
    .then((response) => {
        // Get the error message from the errorMessages object
        const errorMessage = errorMessages[response.status] || errorMessages.default;

        if (response.ok) {
            // Redirect the user to the home.html page
            window.location.replace('/user/home.html');
        } else {
            // Update the error message text
            document.getElementById('err-msg').textContent = errorMessages.default;
        }

        // Hide the loading indicator
        document.getElementById('loading-indicator').style.display = 'none';
    })
    .catch((error) => {
        // Do something with the error here
        // Hide the loading indicator
        document.getElementById('loading-indicator').style.display = 'none';
    });
});

/*------------*\
   Newsletter
\*------------*/
document.getElementById("sub-btn").addEventListener("click", function() {
    // Get the email address from the text field
    const email = document.getElementById("news-mail").value;

    // Send an HTTP POST request to the server
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
    .then(response => {
        if (response.ok) {
            console.log("Email added to newsletter!");
        } else {
            console.error("Error adding email to newsletter.");
        }
    });
});
