const express = require('express')
const app = express()
const todoRouter = require('./routes/todo')

app.use(express.json())

app.use('/todo', todoRouter)

app.listen(3000, console.log(`This server is running on : 3000`))

