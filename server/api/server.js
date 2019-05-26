const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const tableRoutes = require('../routes/tables')

const server = express()

//global middlewarez
server.use(express.json())
server.use(helmet())
server.use(cors())

//ROUTES
server.use('/api/tables', tableRoutes)

module.exports = server