require('dotenv').config()
const express = require('express')
const sequelize = require('./db')


const PORT = process.env.PORT

const app = express()

const start = async() => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('Server started'))
    } catch{
        console.log(e)
    }
}

start()