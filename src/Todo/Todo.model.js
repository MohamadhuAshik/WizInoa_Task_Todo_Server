const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    Task: String,
    Category: String,
    createdAt: String,
    updatedAt: String
})

const TodoModel = mongoose.model("Todo", TodoSchema)

module.exports = TodoModel