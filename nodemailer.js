const http = require('http')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const server = http.createServer(async (req, res) => {
    if(req.url == '/favicon.ico'){
        return res.end()
    }
    
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_PASSWORD
        }
      })
      
      await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,  
        subject: 'Welcome to Node.js',
        text: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.'
      }) 
    } catch (error) {
      console.log('An error occured while sending mail: ',error)
    }

    res.end('Mail sent to the user!')
})

server.listen(3000)

/*
  # Environment Variables:
    - Install dotenv, Import and invoke config()
    - Create .env file, add variables
      - EMAIL=user@gmail.com
    - To use these variables in server
      - process.env.EMAIL

  # Nodemailer:
    - External package that can be used with Node.js to send emails
    - Emails can be sent using SMTP (Simple Mail Transfer Protocol)

    - If service is 'Gmail', create application password: https://myaccount.google.com/apppasswords
      - Enter the name of you app, something like 'Nodemailer test'
        - Click 'Create': You will see a modal with 16 character password
          - This password needs to be used instead of actual Gmail password
*/