 const express = require('express')
 const app = express()
const logger = require('./logger')

const authorize = require('./authorize')
 
 /* app.get('/', logger /* here logger is my middleware function */ /*(req,res)=>{
     
    res.send('Home')
  })
  app.get('/about', logger , (req, res)=>{
     
    res.send('About')
  })
     till here we have learned to add logger manually now we will learn how to apply logger or our middleware to multiple request at once */ 

     app.use([logger, authorize])//allows us to use logger to multiple request without  mannually adding it to them
     /* jis order mein middleware function likha hai usse order mein implement  hota hai jaise ki yaha par phle loger likha hai to phle logger response send karega on a request and then authorize send karega and vice versa*/
  app.get('/', (req,res) =>{
     
    res.send('Home')
  })
  app.get('/about', logger , (req, res)=>{
     
    res.send('About')
  })
 app.listen(5000, () => {
   console.log('Server is listening on port 5000....')
 })
 