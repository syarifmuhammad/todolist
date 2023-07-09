const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const Todo = require('../model/Todo')

const getTodo = (req, res) => {
    Todo.find().then(data => {
        res.status(200).json({
            message: "Berhasil mendapatkan data todo !",
            data: data,
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            message: "Gagal mendapatkan data todo !",
        })
    })
}

const createTodo = async (req, res) => {
    const { todo } = req.body

    const create = new Todo({
        todo: todo,
        completed: false
    })

    try {
        await create.save()
        res.status(201).json({
            message: "Berhasil create todo !",
        })
    } catch (err) {
        if (err instanceof mongoose.Error) {
            res.status(400).json({
                message: "Gagal mendapatkan data todo !",
                errors: err.errors
            })
        } else {
            res.status(500).json({
                message: "Internal server error !",
                errors: err.message
            })
        }
    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params
    const { todo, completed } = req.body
    
    if (!ObjectId.isValid(id)) {
        res.status(400).json({ msg: "Id tidak valid !" })
        return
    }

    try {
        const todo_exists = await Todo.findById(id).exec()
        if (!todo_exists) {
            throw new Error("Todo tidak ditemukan !")
        }
      
        await Todo.findByIdAndUpdate(id, {
            todo: todo,
            completed: completed,
        }, {
            runValidators: true
        }).exec()

        res.status(200).json({ msg: "Berhasil update todo !" })
    } catch (err) {
        console.log(err)
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400).json({ 
                message: "Body request tidak valid !",
                errors: err.errors
            })
        } else {
            res.status(404).json({ 
                message: "Todo tidak ditemukan !",
            })
        }
    }


}

const deleteTodo = (req, res) => {
    const { value } = req.params
    let index = todos.findIndex((t) => t == value)
    todos.splice(index, 1)
    res.status(200).json({ msg: "Berhasil delete todo !" })
}

module.exports = { getTodo, createTodo, updateTodo, deleteTodo }