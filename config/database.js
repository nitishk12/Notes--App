const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/oct-notes-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('error', err)
    })
module.exports = {
    mongoose
}