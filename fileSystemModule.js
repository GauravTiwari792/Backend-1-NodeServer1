/*
    # FileSystem (fs) module
      - To work with files in Node server and perform operations like read, write, update, and delete
      - Synchronous Methods:
        - readFileSync(): Read the content of a file synchronously, returns buffer data
          - path: Path to the file along with filename and extension
          - options:
            - encoding: utf8 - Converts buffer data into string data
        - writeFileSync(): Synchronously,
          - Create a new file and write a content
          - or overrite content in an existing file
          - Arguments:
            - path: Path to the file along with filename and extension
            - data: string/buffer data to write
        - appendFileSync(): Append content in an existing file synchronously
          - path: Path to the file along with filename and extension
          - data: string/buffer data to write
        - unlinkSync(): Delete a file synchronously
          - path: Path to the file along with filename and extension

      - Asynchronous Methods:
        - readFile(): Read the content of a file asynchronously, returns buffer data
          - path: Path to the file along with filename and extension
          - callback: error (Any error occured while reading the file), data (file data)
        - writeFile(): Asynchronously,
          - Create a new file and write a content
          - or overrite content in an existing file
          - Arguments:
            - path: Path to the file along with filename and extension
            - data: string/buffer data to write
            - callback: error (Any error occured while reading the file)
        - appendFile(): Append content in an existing file asynchronously
          - path: Path to the file along with filename and extension
          - data: string/buffer data to write
          - callback: error (Any error occured while reading the file)
        - unlink(): Delete a file asynchronously
          - path: Path to the file along with filename and extension
          - callback: error (Any error occured while reading the file)
*/

/*------------------------------------*/
// # READ A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     const data = fs.readFileSync('text1.txt', {encoding: 'utf8'})
//     res.end(data)
// })

// server.listen(3000)

/*------------------------------------*/
// # WRITE TO A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.writeFileSync('text2.txt', 'JAVASCRIPT')
//     res.end('Content added to the file')
// })

// server.listen(3000)

/*------------------------------------*/
// #UPDATE A FILE (append data to a file) SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.appendFileSync('text1.txt', ', CSS, JavaScript, Node.js Introduction')
//     res.end('Content appended to the file')
// })

// server.listen(3000)

/*------------------------------------*/
// # DELETE A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.unlinkSync('text2.txt')
//     res.end('File deleted')
// })

// server.listen(3000)

/*------------------------------------------------------*/
// # READ A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.readFile('text1.txt', (error, data) => {
//         if(error) {
//             console.log('Some error occurred', error)
//         } else{
//             console.log(data.toString())
//         }
//     })
//     res.end('File read succesfully!')
// })

// server.listen(3000)

/*------------------------------------*/
// # WRITE TO A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.writeFile('text1.txt', 'Node.js is interesting :)', (error) => {
//         if(error) {
//             console.log('Some error occurred', error)
//         } else{
//             console.log('Data written successfully')
//         }
//     })
//     res.end('File wrote succesfully!')
// })

// server.listen(3000)

/*------------------------------------*/
// # UPDATE A FILE ASYNCHRONOUSLY (APPEND)
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.appendFile('text1.txt', '\nWe are learning fs module right now!', (error) => {
//         if(error) {
//             console.log('Some error occurred', error)
//         } else{
//             console.log('Data appended successfully')
//         }
//     })
//     res.end('File updated asynchronously!')
// })

// server.listen(3000)

/*------------------------------------*/
// # DELETE A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if(req.url == '/favicon.ico'){
//         return res.end()
//     }
//     fs.unlink('text1.txt', (error) => {
//         if(error) {
//             console.log('Some error occurred', error)
//         } else{
//             console.log('File deleted successfully')
//         }
//     })
//     res.end('File deleted successfully')
// })

// server.listen(3000)

/*
    # Additional Notes:
      - Core modules can start with an optional 'node:'
        - Example: require('http') similar to require('node:http') 
*/