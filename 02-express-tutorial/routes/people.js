const  express = require('express')

const router = express.Router()

let {people} = require('../data')

 router.get('/', (req, res) => { // ('/'---> /api/data)
  res.status(200).json({success: true, data: people })  
 })

 router.post('/', (req,res) => {/* // This one listens to POST requests at /api/people */ 
  /* /api/people is used for adding or submitting a person. */
  /*  /api/people
Purpose: Used to add a new person (like creating a user).

It returns a JSON response. */
  const {name} = req.body
  if(!name){
    return res.status(400).json({success: false , msg: 'please123 provide naame value'})
  }
  res.status(201).json({success: true, person: name})
 })

 router.post('/postman', (req,res) =>{

  const {name} = req.body
  if(!name){
    return res.status(400).json({success: false , msg: 'people do i'})
  }
  res.status(201).json({success: true, data: [...people,name]})

 }) 

 


  router.put('/:id',(req,res) => {

   const {id} = req.params
   const  {name} = req.body 
   /* console.log(id, name)
    res.send('hello world')*/
    //ye neche vala code check karega ki koi person exist karta hai ki ni karta hai id ke corresponding 
    const person = people.find((person) => person.id === Number(id))
   if(!name){
    return res.status(400).json({ success: false, msg: `no person with id ${id}`})
   }


   //ye vala code jab id match karegi to uss id ke corresponsiding name change karega 
   const newPeople = people.map((person) => {
    if(person.id === Number(id)){
      person.name = name/*  Since you're modifying the original person object (person.name = name), this also mutates the original people array. */
    }
    return person
   })
    res.status(200).json({ success:true, data: newPeople })
  })


  router.delete('/api/people/:id', (req,res) =>{
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person) {
   return res.status(400).json({success: false, msg: `no person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success: true, data: newPeople})
  })


module.exports = router




