const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')


router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/:id', authenticateUser, notesController.show)
router.post('/notes', authenticateUser, notesController.create)
router.put('/notes/:id', authenticateUser, notesController.update)
router.delete('/notes/:id', notesController.destroy)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.post('/categories', authenticateUser, categoriesController.create)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)


module.exports = router