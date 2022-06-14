const express = require('express')

app = express()

app.get('/',function(req,res){
    res.end("This is home page.")
})

app.get('/books',function(req,res){
    res.end("Information about books.")
})

app.listen(3000, function(req,res){
    console.log("Server running at 3000")
})