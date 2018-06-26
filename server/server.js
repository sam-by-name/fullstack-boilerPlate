const path = require('path')
const express = require('express')

const poems = require('./routes/mainRoute')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/poems', poems)

// server.use('/v1/poems', poems)

module.exports = server
