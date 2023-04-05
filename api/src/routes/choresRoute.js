const { Router } = require('express')
const {getAllChores, createChore, toggleComplete, deleteChore, updateChore} = require('../controllers/choresController')


const choresRouter = Router()

choresRouter.get('/', getAllChores)
choresRouter.post('/create', createChore)
choresRouter.put('/update', updateChore)
choresRouter.put('/update/complete', toggleComplete)
choresRouter.delete('/delete/', deleteChore )



module.exports = choresRouter
