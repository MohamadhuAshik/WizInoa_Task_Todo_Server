const TodoModel = require("./Todo.model")
const moment = require("moment")


module.exports = {
    getTodo: async (req, res) => {
        try {
            const TodoData = await TodoModel.find()
            res.status(200).json({ response_code: 200, message: "Todo Data Fetch SuccessFully", data: TodoData })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }

    },
    addTodo: async (req, res) => {
        try {
            const { todo } = req.body
            const newTodo = new TodoModel({
                Task: todo,
                Category: "Todo",
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
            })
            await newTodo.save()
            res.status(200).json({ response_code: 200, message: "Todo Added SuccessFully" })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },

    updateTodo: async (req, res) => {
        try {
            const { id } = req.params
            const { task } = req.body

            await TodoModel.updateOne({
                _id: id
            }, {
                $set: {
                    Task: task,
                    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            })
            res.status(200).json({ response_code: 200, message: "Todo Update SuccessFully" })

        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },
    CategoryChange: async (req, res) => {
        try {
            const { id } = req.params
            const { status } = req.body
            await TodoModel.updateOne(
                {
                    _id: id
                },
                {
                    $set: {
                        Category: status,
                        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
                    }
                }

            )
            res.status(200).json({ response_code: 200, message: "Todo Status Update SuccessFully" })

        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },
    getCategoryTodo: async (req, res) => {
        try {
            const todoCategory = await TodoModel.find({
                Category: "Todo"
            })
            res.status(200).json({ response_code: 200, message: "Todo Data Fetch SuccessFully", data: todoCategory })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },
    getCategoryInProgress: async (req, res) => {
        try {
            const todoCategory = await TodoModel.find({
                Category: "InProcess"
            })
            res.status(200).json({ response_code: 200, message: "Todo Data Fetch SuccessFully", data: todoCategory })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },
    getCategoryDone: async (req, res) => {
        try {
            const todoCategory = await TodoModel.find({
                Category: "Done"
            })
            res.status(200).json({ response_code: 200, message: "Todo Data Fetch SuccessFully", data: todoCategory })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    },

    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params
            await TodoModel.deleteOne({ _id: id })
            res.status(200).json({ response_code: 200, message: "Todo Delete SuccessFully" })
        } catch (err) {
            console.log(err)
            res.status(500).json({ response_code: 500, message: "Internal Server Error" })
        }
    }
}