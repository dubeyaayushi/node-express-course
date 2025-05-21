 const express = require('express')
 const app = express()
 const { products } = require('./data')
 
 app.get('/', (req, res) => {
   res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
 })
 app.get('/api/products', (req, res) => {
   const newProducts = products.map((product) => {
     const { id, name, image } = product
     return { id, name, image }
   })
 
   res.json(newProducts)
 })
 app.get('/api/products/:productID', (req, res) => {
   // console.log(req)
   // console.log(req.params)
   const { productID } = req.params
 
   const singleProduct = products.find(
     (product) => product.id === Number(productID)
   )
   if (!singleProduct) {
     return res.status(404).send('Product Does Not Exist')
   }
 
   return res.json(singleProduct)
 })
 
 app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
   console.log(req.params)/* req.params – Route Parameters
These are part of the URL path itself and are defined by : in your route. */
   res.send('hello world')
 })
 
 app.get('/api/v1/query', (req, res) => {
   //console.log(req.query)
   /* req.query – Query Parameters
These are extra bits of data sent after the ? in a URL, often used for filtering or searching.
example output of request of url "http://localhost:5000/api/v1/query?name=john&id=4"---> this was our requested url

 { name: 'john', id: '4' }---> this is our output of above requested url */
  const {search, limit} = req.query
  let sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter((product) =>{
        return product.name.startsWith(search) /* jo bhi product search karoge ye usko fetch karega */
        /* It filters the list of products, keeping only those whose names start with the word typed in search. */

    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
    /* What this does:
If a limit is provided (for example, from a query parameter like ?limit=3), this line will:

Convert the limit value to a number using Number(limit).

Return only the first N items from the sortedProducts array using .slice().node app. */
/* const products = ['A', 'B', 'C', 'D', 'E']
const limited = products.slice(0, 3)

console.log(limited) // ['A', 'B', 'C']
So, slice(0, 3) means:"Start at index 0, and give me 3 items (index 0, 1, and 2)."

  */
  }

  if(sortedProducts.length < 1){
    //res.status(200).send('no products matched your search')
    return res.status(200).json({success: true, data: []})
  }
   
   res.status(200).json(sortedProducts)
 })
    
 
 app.listen(5000, () => {
   console.log('Server is listening on port 5000....')
 })
 