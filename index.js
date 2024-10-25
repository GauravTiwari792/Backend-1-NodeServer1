const http = require('http')
const dotenv = require('dotenv')
dotenv.config()

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    console.log(process.env.EMAIL)
    res.end('Hi')
})

server.listen(3000)

/*
  # Environment Variables:
    - Install dotenv, Import and invoke config()
    - Create .env file, add variables
      - EMAIL=user@gmail.com
    - To use these variables in server
      - process.env.EMAIL
*/