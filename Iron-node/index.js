const express = require("express");

const app = express()

const port = 42069;
app.listen(port, () => {
  console.log("listening on port " + port);
})

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});