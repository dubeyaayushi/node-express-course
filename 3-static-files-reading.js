const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))
/* unlike in out http module where we created a path for every element on our web page here we have created a single folder with name public which contains all the necesarry files of our elements on our webpage
and with the help of built in express modules here that module is static   */

app.get('/', (req, res) =>{//here we are gonna do something new that is exporting a file on the user's request for that we are gonna use path module that comes along with the express which would provide us the file on the user's request 
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.all('*',(req, res) =>{
    res.status(404).send('reesource not found')
})

app.listen(5000 , () =>{
    console.log('server listening on port  5000...')
})


/* so basically humein idhar static files ke bare mein padha jo humein modify karne ki zarurat ni hoti har baar apni website pe jaise ki kise website ka jo header hota hai vo constant he rheta hai to vo vahi par rahe aur usse modify na karna ho iselye hum static vale jo abhi humein upar padhe iska use karte hai  */

/* statis assets just means a file that server dosen't need to change */

 