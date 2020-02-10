const express = require('express')
const { mongoose } = require('./config/database')
const router = require('./config/routes')
const { usersRouter } = require('./app/controllers/usersController')

const app = express()
const port = 3050
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use('/users', usersRouter)
app.use('/', router)

app.listen(port, () => {
    console.log("listening to port", port)
})