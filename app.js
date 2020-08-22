const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb://localhost/Employee"

const app = express();

const PORT = process.env.PORT || 9000

mongoose.connect(url, { useNewUrlParser: true })

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