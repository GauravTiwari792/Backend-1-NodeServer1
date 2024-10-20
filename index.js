const http = require('http')

const server = http.createServer((req, res) => {
    res.end('BACKEND :)')
})

server.listen(3000)