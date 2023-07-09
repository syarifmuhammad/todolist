const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        minLength: [3, 'Todo minimal 3 character'],
    },
    completed: Boolean,
}) 

module.exports = mongoose.model("Todo", todoSchema)