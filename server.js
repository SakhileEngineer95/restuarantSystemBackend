const http = require('http')
const exportValues = require('./app.js')
const port = process.env.PORT || 3000

const server = http.createServer(exportValues.app)
server.listen(port)