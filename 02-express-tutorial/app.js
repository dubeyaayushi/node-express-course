const express = require('express') 
const app = express()

app.get('/', (req,res) =>{
    res.json()
})


app.listen(5000, () =>{
    console.log('server is listening on port 5000......')
})