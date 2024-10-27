// const http = require('http');

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }

//   const USERS = [
//     {
//       "id": 1,
//       "email": "george.bluth@reqres.in",
//       "first_name": "George",
//       "last_name": "Bluth",
//       "avatar": "https://reqres.in/img/faces/1-image.jpg"
//     },
//     {
//       "id": 2,
//       "email": "janet.weaver@reqres.in",
//       "first_name": "Janet",
//       "last_name": "Weaver",
//       "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     },
//     {
//       "id": 3,
//       "email": "emma.wong@reqres.in",
//       "first_name": "Emma",
//       "last_name": "Wong",
//       "avatar": "https://reqres.in/img/faces/3-image.jpg"
//     },
//     {
//       "id": 4,
//       "email": "eve.holt@reqres.in",
//       "first_name": "Eve",
//       "last_name": "Holt",
//       "avatar": "https://reqres.in/img/faces/4-image.jpg"
//     },
//     {
//       "id": 5,
//       "email": "charles.morris@reqres.in",
//       "first_name": "Charles",
//       "last_name": "Morris",
//       "avatar": "https://reqres.in/img/faces/5-image.jpg"
//     },
//     {
//       "id": 6,
//       "email": "tracey.ramos@reqres.in",
//       "first_name": "Tracey",
//       "last_name": "Ramos",
//       "avatar": "https://reqres.in/img/faces/6-image.jpg"
//     }
//   ]

//   const DOGS = [
//     "https://images.dog.ceo/breeds/weimaraner/n02092339_452.jpg",
//     "https://images.dog.ceo/breeds/kelpie/n02105412_7513.jpg",
//     "https://images.dog.ceo/breeds/lhasa/n02098413_13083.jpg",
//     "https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg",
//     "https://images.dog.ceo/breeds/sheepdog-english/n02105641_9412.jpg",
//     "https://images.dog.ceo/breeds/pomeranian/n02112018_2380.jpg",
//     "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3617.jpg",
//     "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_5179.jpg",
//     "https://images.dog.ceo/breeds/mountain-bernese/n02107683_265.jpg",
//     "https://images.dog.ceo/breeds/keeshond/n02112350_6928.jpg"
//   ]

//   if(req.method === 'GET' && req.url === '/users') {
//     res.end(JSON.stringify(USERS))
//   } else if(req.method === 'GET' && req.url === '/dogs') {
//     res.end(JSON.stringify(DOGS))
//   } else {
//     res.end('This is a test server :)')
//   }
// })

// server.listen(3000)

/* -------------------------------- */

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.url == '/favicon.ico') {
    return res.end()
  }

  if(req.method === 'GET' && req.url === '/register') {
    const data = fs.readFileSync('form1.html')
    res.end(data)
  } else if(req.method === 'POST' && req.url === '/process-data') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', () => {
      console.log('Data received from client: ', body)
    })

    req.on('error', () => {
      console.log('Some error occurred')
    })

    res.end('Data received from client successfully')
  } else {
    res.end('We are learning Events :)')
  }
})

server.listen(3000)


/*
  # Next class:
    - How to send other types of data using postman
    - How to send data from HTML form
    - Custom Events
*/

/*
  Events: 
  - Actions/ occurrences that happen during runtime (Eg.: Data received from the client, data updates, system events, etc.)- Node.js is an event-driven platform with built-in support for handling and reacting to events

  - Type of events
    - 'data': Readable stream receives chunks of data (n number of times/ request)
    - 'end': Readable stream has no more data to read (1 time/ request)
    - 'error': Error occurred

  # Routes
    - / : Root route

  # HTTP Methods:
    - GET: Read
    - POST: Create (Data to be sent from the client)
    - PATCH/PUT: Update (Data to be sent from the client)
    - DELETE: Delete
*/