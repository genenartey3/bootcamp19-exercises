const express = require("express");
const path = require('path')
const app = express();
app.use(express.static('public'))

app.use(express.static(__dirname + "/View"));
app.use(express.static(__dirname + "/Script"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get('/huncho', (req, res) => {
    res.sendFile(path.join(__dirname + '/huncho.html'))
})

app.listen(3000);
console.log("Running at port 3000");
