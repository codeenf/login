const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extened:true}))

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req ,res){
   const name = req.body.fn
   const email = req.body.mail

 if(name==='sahil' && email ==='sahil@123'){
    res.sendFile(__dirname +'/index2.html')
 }else{
    res.send('Authentication failed')
 }
})

app.listen(3000 , function(){
    console.log("server is running on port 3000");
})
