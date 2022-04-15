// Require Express.js
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()

// Start an app server
var HTTP_PORT = 3000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

// Define default endpoint
// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

// Define check endpoint
app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
    });

app.get('/app/xxx',(req, res) => {
    res.status(200).json({'message': req.params.number})
    });