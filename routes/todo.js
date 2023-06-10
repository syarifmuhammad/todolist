const express = require('express')
const router = express.Router()
const { getTodo, createTodo, updateTodo, deleteTodo } = require('../controller/todo')

router.get('/', getTodo)

router.post('/create', createTodo)

router.put('/update', updateTodo)

router.delete('/:value/delete', deleteTodo)


module.exports = router


