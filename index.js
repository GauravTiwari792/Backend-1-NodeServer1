// const http = require('http')
// const fs = require('fs')
// const qs = require('qs')
// const EventEmitter = require('events')

// const eventEmitter = new EventEmitter()
// const users = []

// eventEmitter.on('fancy-event', () => {
//   const sum = 38298234 + 73238487
//   console.log(sum)
// })

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
  
//   if(req.method === 'GET' && req.url === '/custom-event') {
//     eventEmitter.emit('fancy-event')
//     res.end('We are learning custom events')
//   } else if(req.method === 'GET' && req.url === '/register') {
//     const data = fs.readFileSync('form1.html')
//     res.end(data)
//   } else if(req.method === 'GET' && req.url === '/users') {
//     res.end(JSON.stringify(users))
//   } else if(req.method === 'POST' && req.url === '/users') {
//     let newUser = '';

//     req.on('data', (chunk) => {
//       newUser += chunk
//     })

//     req.on('end', () => {
//       const newUserJSON = qs.parse(newUser)
//       users.push(newUserJSON)
//     })

//     req.on('error', () => {
//       console.log('Some error occurred')
//     })

//     res.end('New user created')
//   } else {
//     res.end('We are learning Events :)')
//   }
// })

// server.listen(3000)

/* -------------------------------- */
const http = require('http')
const fs = require('fs')
const qs = require('qs')
const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
const users = []

eventEmitter.on('new-user-created', (userFirstName) => {
  console.log(`Welcome email sent to ${userFirstName}`)
})

const server = http.createServer((req, res) => {
  if(req.url == '/favicon.ico') {
    return res.end()
  }
  
  if(req.method === 'GET' && req.url === '/register') {
    const data = fs.readFileSync('form1.html')
    res.end(data)
  } else if(req.method === 'GET' && req.url === '/users') {
    res.end(JSON.stringify(users))
  } else if(req.method === 'POST' && req.url === '/users') {
    let newUser = '';

    req.on('data', (chunk) => {
      newUser += chunk
    })

    req.on('end', () => {
      const newUserJSON = qs.parse(newUser)
      users.push(newUserJSON)
      eventEmitter.emit('new-user-created', newUserJSON.firstName)
    })

    req.on('error', () => {
      console.log('Some error occurred')
    })

    res.end('New user created')
  } else {
    res.end('We are learning Events :)')
  }
})

server.listen(3000)

/*
  # Custom Events: 
    - Events created by the developer to handle specific scenarios
    - 2 major expressions:
      - Emit the event
      - Listen to the events emitted
    - Import 'events' module
*/