const express = require('express')
const router = express.Router()
const { getTodo, createTodo, updateTodo, deleteTodo } = require('../controller/todo')

router.get('/', getTodo)

router.post('/create', createTodo)

router.post('/:id/update', updateTodo)

router.get('/:id/delete', deleteTodo)


module.exports = router


