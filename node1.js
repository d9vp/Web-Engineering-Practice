var http = require('http');

const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>This is HTML Body.</h1>
        </body>
        </html>`)
})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}:/`);
})