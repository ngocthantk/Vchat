var express = require("express");
var app = express();

var hostname = "localhost";
var port = 8080;

app.get("/helloworld", (req, res) => {
    res.send("<h1>helloworld</h1>");
});

app.listen(port, hostname, () => {
    console.log("connected");
});