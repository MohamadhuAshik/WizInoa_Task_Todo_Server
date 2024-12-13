const express = require("express")
const { addTodo, updateTodo, getTodo, deleteTodo, CategoryChange, getCategoryTodo, getCategoryInProgress, getCategoryDone } = require("./Todo.controller")

const router = express.Router()

router.get("/gettodo", getTodo)
router.get("/getcategorytodo", getCategoryTodo)
router.get("/getcategoryinprogress", getCategoryInProgress)
router.get("/getcategorydone", getCategoryDone)
router.post("/addtodo", addTodo)
router.put("/edittodo/:id", updateTodo)
router.patch("/statusupdate/:id", CategoryChange)
router.delete("/deletetodo/:id", deleteTodo)

module.exports = router