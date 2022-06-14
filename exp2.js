const express = require('express')
const bp = require('body-parser')

const port=8000;
const parser = bp.urlencoded({extended: true})

app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/info',parser, (req,res)=>{
    console.log(req.body);
    res.send(JSON.stringify(req.body));
})

app.listen(port)