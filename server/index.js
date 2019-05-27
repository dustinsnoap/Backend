require('dotenv').config()
const server = require('./api/server')
const port = process.env.PORT || 3333

server.listen(port, () => {
    console.log(`\n*** Have it your way on port ${port} ***\n`)
})