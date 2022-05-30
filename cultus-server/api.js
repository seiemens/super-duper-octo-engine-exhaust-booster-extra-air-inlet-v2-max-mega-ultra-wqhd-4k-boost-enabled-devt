const express = require('express')
const Mongoose = require("mongoose")
const localDB = process.env.MONGO_URL

require('dotenv/config');
const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
}
module.exports = connectDB
app = express()

app.post("/login", (req, res) => {
    res.send("kelb")
});

app.listen(process.env.PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started At Port " + process.env.PORT);
    }

});