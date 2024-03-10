const express = require("express");
const app = express();
const event = require("./routes/event");
const ejs = require('ejs');

app.listen(3003 || process.env.PORT,() => {
    console.log("server started...")
})

app.set('view engine', 'ejs');
app.use(express.json())
app.use("/", event);