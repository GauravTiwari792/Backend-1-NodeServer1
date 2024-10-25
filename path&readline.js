/*
  # Readline module
    - Create an interface to read user inputs from the command line
    - Methods:
      - createInterface(): Create an interface to read from the command line
      - question(): Read from the command line
        - questionText
        - callback: parameter will contain the input given by the user
      - close(): Close the interface
*/

// const http = require('http')
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin, // Readable stream
//   output: process.stdout // Writable stream
// })

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
  
//   rl.question('Please enter your name: ', (name) => {
//     console.log(`You name is ${name}`)
//     rl.close()
//   })

//   // rl.question('Please enter your age: ', (age) => {
//   //   if(age >= 18) {
//   //     console.log('You are eligible to vote!')
//   //   } else {
//   //     console.log('You are not eligible to vote!')
//   //   }
//   // })

//   // rl.question('Please enter your name: ', (name) => {
//   //   rl.question('Please enter your age: ', (age) => {
//   //     if(age >= 18) {
//   //       console.log(`Hi ${name}, you are eligible to vote!`)
//   //     } else {
//   //       console.log(`Hi ${name}, you are not eligible to vote!`)
//   //     }
//   //   })
//   // })

//   res.end('Server')
// })

// server.listen(3000)

/* ------------------------------- */
/*
  # Path module
    - Work with paths (relative, absolute)
      - Relative path: Path based on current file location
      - Absolue path: Path based on system root path
      - Methods:
        - extname(): Return the extension of the file; For folders, it returns empty string
        - parse(): Return an object for that path
        - join():  Concatenates the given path segments to form a single path
        - resolve(): Resolves the given path segments to return an absolute path
    
    - Reserved keywords for path
      - __dirname: Current working directory (folder)
      - __filename: __dirname + file name + extension
*/

const http = require('http')
const path = require('path')

const server = http.createServer((req, res) => {
  if(req.url == '/favicon.ico') {
    return res.end()
  }

  // console.log(__dirname)
  // console.log(__filename)

  // console.log(path.extname(__filename)) //.js
  // console.log(path.extname(__dirname)) // Empty string

  // console.log(path.parse(__filename))

  // console.log(path.join('parentF', 'childF', 'text1.txt'))
  // console.log(path.resolve('/parentF', 'childF', 'text1.txt'))
  // console.log(path.join('/parentF', '/childF', 'text1.txt'))

  // console.log(path.resolve('parentF', 'childF', 'text1.txt'))
  // console.log(path.resolve('/parentF', 'childF', 'text1.txt'))
  // console.log(path.resolve('/parentF', '/childF', 'text1.txt'))
  res.end('Server')
})

server.listen(3000)

/*
  # Future
    - process: .env, .exit(), etc.

*/