const express = require("express")
require("dotenv").config()
const TodoRoutes = require("./src/Todo/Todo.routes")

const cors = require("cors")
const { default: mongoose } = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/todo", TodoRoutes)

const PORT = process.env.PORT || 4000
const connectionString = `mongodb://localhost:27017/WizInoa_Task`
const dbRun = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("mongodb Connected")

    } catch (err) {
        console.log(err)
    }
}
dbRun()

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`server is Running On http://localhost:${PORT}`)
})