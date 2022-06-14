const fs = require('fs')

let ogtext = fs.readFileSync('node3.txt')
console.log(ogtext.toString())

let text="New Text which is to be written in file"
fs.writeFileSync('node3.txt',text);

let retext = fs.readFileSync('node3.txt')
console.log(retext.toString())

// //Add this one line only in Q4 along with above code
// fs.unlinkSync('node3.txt')