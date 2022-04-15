// Require Express.js
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

// Copy functions from A2

function coinFlip() {
  let rand = Math.floor(Math.random() * 100 + 1);
  if (rand % 2 == 0) {
    return "heads";
  } else {
    return "tails";
  }
}

function coinFlips(flips) {
  if (!flips) {
    flips = 1;
  }
  const results = [];
  for (let i = 0; i < flips; i++) {
    results[i] = coinFlip();
  }
  return results;
}

function flipACoin(call1) {
    let call = call1;
    let flip = coinFlip();
    let result = "";
    if (call === flip){
      result = 'win';
    }else{
      result = 'lose';
    }
    
    const object2 = {call, flip, result}
    return(object2)
  }

// Start an app server
var HTTP_PORT = 3000;
const server = app.listen(HTTP_PORT, () => {
  console.log("App listening on port %PORT%".replace("%PORT%", HTTP_PORT));
});


// Define check endpoint
app.get("/app/", (req, res) => {
  // Respond with status 200
  res.statusCode = 200;
  // Respond with status message "OK"
  res.statusMessage = "OK";
  res.writeHead(res.statusCode, { "Content-Type": "text/plain" });
  res.end(res.statusCode + " " + res.statusMessage);
});

app.get("/app/flip", (req, res) => {
    var flipVar = coinFlip()
    res.status(200).json({ 'flip' : flipVar });
  })

app.get("/app/flips/:number", (req, res) => {
  res.status(200).json({ "raw": coinFlips(req.params.number) });
});

app.get("/app/flip/call/:heads", (req, res) => {
    var flipObj = flipACoin(req.param.heads)
    Object.assign(flipObj, {call: "heads"})
    res.status(200).json({ flipObj });
  });

  // Define default endpoint
// Default response for any other request
app.use(function (req, res) {
    res.status(404).send("404 NOT FOUND");
  });
  