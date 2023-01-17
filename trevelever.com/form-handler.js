const mysql = require('mysql');
// const express = require('express');
// const mysql = require('mysql');

// // Initialize the express app
// const app = express();

// // Set up the middleware to parse the request body as JSON
// app.use(express.json());

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'XS_SAHIL',
//     password: 'Its@XS',
//     database: 'trevelever',
//     // connectionLimit: 10
// });

// /*-----------------------------------------*\
//     Set up the login route
// \*-----------------------------------------*/
// app.post('/login', (request, response) => {
//     // Get the login form data from the request body
//     const { email, password } = request.body;

//     // Check if the user exists in the database
//     pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
//         if (error) {
//             console.error(error);
//             response.sendStatus(500);
//             return;
//         }

//         // If the user doesn't exist, send a 404 response
//         if (results.length === 0) {
//             response.sendStatus(404);
//             return;
//         }

//         // If the user exists, check if the password is correct
//         if (results[0].password === password) {
//             // If the password is correct, send a 200 response
//             response.sendStatus(200);
//         } else {
//             // If the password is incorrect, send a 401 response
//             response.sendStatus(401);
//         }
//     });
// });

// /*-----------------------------------------*\
//     Set up the newsletter route
// \*-----------------------------------------*/
// app.post('/newsletter', (request, response) => {
//     // Get the email address from the request body
//     const { email } = request.body;

//     // Insert the email address into the newsletter table
//     pool.query('INSERT INTO newsletter (email) VALUES (?)', [email], (error, results) => {
//         if (error) {
//             console.error(error);
//             response.sendStatus(500);
//             return;
//         }

//         console.log("Email added to newsletter!");
//         response.sendStatus(200);
//     });
// });

// /*-------------------*\
//    Start the server
// \*-------------------*/
// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

const pool = mysql({
    host: "localhost",
    user: "XS_SAHIL",
    password: "Its@XS",
    database: "trevelever",
    connectionLimit: 10
})

pool.query('select * from users', (error, result, fields) => {
    if(error) {
        return console.log(error);
    }
    return console.log(result);
})
