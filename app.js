const express = require("express");
const app = express();
const event = require("./routes/event");
const ejs = require('ejs');

app.listen(3004 || process.env.PORT,() => {
    console.log("server started...")
})

app.set('view engine', 'ejs');
app.use(express.json())
app.use("/events", event);

app.get("/", (req,res) => {
    res.render("../views/events.ejs");
})

app.get("/update/:id", (req,res) => {
    res.render("../views/specificEvent.ejs");
})