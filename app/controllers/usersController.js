const express = require('express')
const router = express.Router()
const { User } = require('../models/User')
const { authenticateUser } = require('../middlewares/authentication')

//register
router.post('/register', (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })
})

//login
router.post('/login', (req, res) => {
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token).send({})
        })
        .catch((err) => {
            res.send(err)
        })
})

//account
router.get('/account', authenticateUser, (req, res) => {
    const { user } = req
    res.send(user)
})

//logout
router.delete('/logout', authenticateUser, (req, res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
        .then(() => {
            res.send({ notice: "successfully logout" })
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = {
    usersRouter: router
}