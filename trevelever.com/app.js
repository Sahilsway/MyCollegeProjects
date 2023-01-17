const express = require('express');
const port = process.env.PORT || 3306;

const app = express(); // App or express instance

// API Midleware
app.use(express.json());  // Recieve data in JSON form
app.use(express.urlencoded()); // Decode fomr data

// API ROUTES
app.get('/trevelever.com',(req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/formPost', (req, res) => {
    console.log(req.body); // Data of request body
})

// Port listener
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});

