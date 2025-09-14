const fs = require('fs');
const http = require('http');
const os = require('os');
const data = require('./data');

// console.log('Hello Node.js');

// // Logging global objects
// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);
// console.log(module.exports === exports);

// // Blocking vs Non-blocking IO
// const content = fs.readFileSync('./data.js', 'utf8');
// console.log(content);

// fs.readFile('./data.js', 'utf8', (err, content) => {
//   console.log(content);
// });

console.log(data);

http
.createServer((req, res) => {
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data.data));
        res.end();
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.end();
}
).listen(3000);

console.log(`Server running at http://localhost:3000/`);
