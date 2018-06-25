const express = require('express')

const poems = require('./routes/mainRoute')

const server = express()
server.use(express.static('public'))

server.use('/v1/poems', poems)

// server.use('/v1/poems', poems)

module.exports = server
