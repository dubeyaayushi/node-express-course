 
/* express middleware are the functions that are excuted during the requeste to the server each middleware function has access to request and response objects  */
 //req => middleware => res
 
 
 const logger = (req,res,next) =>{
/* things would have been better if we had ur this midlleware function in some seprate file so now we are gonna do that (this is done at the lat 6:22:00 in this part of the video ) */
      const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url , time);
    //res.send('testing')//this is the response to my request 
    next()//it paasses on to next middleware if we don't pass any response to the request 
  }


  module.exports = logger