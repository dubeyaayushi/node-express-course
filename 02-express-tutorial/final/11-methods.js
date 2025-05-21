const express = require('express')
const path = require('path')
const app = express()

 let { people } = require('./data')
const { retry } = require('@reduxjs/toolkit/query')
  

 //app.use(express.static('./methods-public'))


app.use(express.static(path.join(__dirname, 'methods-public')))/* __dirname gives the absolute path of the current file (your app.js).

path.join(...) then creates the correct full path to the methods-public folder — no matter where you run the command from. */

app.use(express.urlencoded({extended: false}))/* This line tells Express to parse incoming data from HTML forms — specifically data sent using:
//jo datauser sub,it karta hai usko express readable form mein convert karta hai 

html
Copy code
<form method="POST">
 It's a middleware that lets Express understand application/x-www-form-urlencoded data (the default form submission format in HTML).

Why do we need it?
HTML forms cannot send JSON directly. They send data like this in the body of a POST request:

ini
Copy code
name=John&age=25
But Express doesn’t know how to read this by default — so we use:

js
Copy code
app.use(express.urlencoded({ extended: false }))
This middleware reads that format and adds the data to req.body in your route handler.


extended: false	Uses the simpler querystring library (does not allow nested objects).*/

 app.use(express.json())
 

 app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people })  
 })

 app.post('/api/people', (req,res) => {/* // This one listens to POST requests at /api/people */ 
  /*/api/people is used for adding or submitting a person. */
  /*  /api/people
Purpose: Used to add a new person (like creating a user).

It returns a JSON response. */
  const {name} = req.body
  if(!name){
    return res.status(400).json({sucess: false , msg: 'please provide naame value'})
  }
  res.status(201).json({success: true, person: name})
 })

app.post('/api/people', (req,res)=>{
  const { name } = req.body
  if(!name){
    return res.status(400).json({success: false, msg: 'pro enough cred'})
  }
  res.status(201).send({success: true, data: [...people,name]})
})

 app.post('/login', (req, res) => {/* 
// This one listens to POST requests at /login */
/* /login is for login/authentication logic. */
/*  /login
Purpose: Used to log in a user.

It returns a simple text message (not JSON). */
  console.log(req.body)
  const {name} = req.body; 
  if(name){
    return res.status(200).send(`welcome ${name}`)
  }
  res.status(401).send('Please provide credentials')
 })

 app.listen(5000, () => {
   console.log('Server is listening on port 5000....')
 })

/*const express = require('express')
const path = require(' path')
const app = express()

let { people } = require('./data')

// Debug path log
console.log('Static folder:', path.join(__dirname, 'methods-public'))

// Serve static files
app.use(express.static('./methods-public'))

// API endpoint
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

// Start server
app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})*/
