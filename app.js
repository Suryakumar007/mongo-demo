require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb://localhost/Employee"
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 9000

mongoose.connect(process.env.MONGODB_URI || url)

const con = mongoose.connection

con.on("open", function () {
    console.log("Connected to db...")
})

app.use(express.json())



const employeeRouter = require("./routes/employees")
app.use("/employees", employeeRouter)

app.listen(PORT, () => {
    console.log("Server listening on port 5000...")
})
module.exports = app;