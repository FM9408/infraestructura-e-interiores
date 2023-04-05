const { APIBASEURL } = process.env
const { request, response } = require('express')
const axios = require('axios')

const req = request
const res = response

const errMessage = (error) => {
    const message = {
        err: 'Algo ha salido mal favor de intentar de nuevo',
        details: error
    }
    return  message
}




module.exports = {
   
}