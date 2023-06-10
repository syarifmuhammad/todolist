require('dotenv').config()
const express = require('express')
const app = express()
const todoRouter = require('./routes/todo')

const connectDB = require('./db/connect')

app.use(express.json())

app.use('/todo', todoRouter)

const start = () => {

    connectDB(process.env.MONGOO_URI).then(() => {
        app.listen(3000, console.log(`This server is running on : 3000`))
    }).catch ((e) => {
        console.log(e)
    })
}

start()




