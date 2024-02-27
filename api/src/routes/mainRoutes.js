const express = require('express');
const router = express.Router();

// Define a route to set a cookie
router.get('/set-cookie', (req, res) => {
    // Set a cookie named 'user' with the value 'john_doe'
    res.cookie('user', 'john_doe', { httpOnly: true, secure: true, sameSite: 'Strict' });

    // Send a response
    res.send('Cookie has been set');
});

// Define a route to read the cookie
router.get('/get-cookie', (req, res) => {
    // Retrieve the value of the 'user' cookie
    const userCookie = req.cookies.user;

    // Send the value as a response
    res.send(`User: ${userCookie}`);
});

// Define a route to remove the cookie
router.get('/remove-cookie', (req, res) => {
    // Clear the 'user' cookie
    res.clearCookie('user');
  
    // Send a response
    res.send('Cookie has been removed');
  });

module.exports = router;