const http = require('http');
const fs = require('fs');
const port=3000
const hostname='127.0.0.1';


const form = fs.readFileSync('formval.html')
const index= fs.readFileSync('some.html')
// let table = fs.readFileSync('table.html') //File to be made
const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    if(url=='/'){
        res.end(index);
    }
    else if(url=='/form'){
        res.end(form);
    }
    // else if(url=='/table')
    //     res.end(table);
    else{
        res.statusCode = 404;
        res.end("Not Found!");
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/:`);
})