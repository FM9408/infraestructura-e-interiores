const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const mainRouter = require('./routes/index')
const { NODE_ENV, BASE_URL } = process.env
require('./db')

const server = express()

server.name = 'infraestructura e interiores api'

server.use(helmet())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({limit: '50mb'}))
server.use(cookieParser())
server.use(cors())
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', NODE_ENV === 'production' ? BASE_URL : '*') 
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})

server.use(compression())
server.use('/', mainRouter)

server.use((err, req, res, next) => {  
    const status = err.status || 500
    const message = err.message || err

    res.status(status).send(message)
})


module.exports = server