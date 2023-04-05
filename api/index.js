require('dotenv').config()
const server = require('./src/app')
const {conn} = require('./src/db')
const port = process.env.PORT || 3001

server.listen(port, () => {
    conn.sync({ force: process.env.NODE_ENV === 'production' ? false : true, alter: false }).then(() => {
        console.log(`servidor levantado en el puerto ${port}`)
   })
})