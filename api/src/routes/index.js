const { Router } = require('express')
const choresRoute = require('./choresRoute')


const mainRouter = Router()
mainRouter.use('/chores', choresRoute)



module.exports = mainRouter