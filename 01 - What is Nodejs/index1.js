
// console.log('Hello Node.js!');

// console.log(global)
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);
// console.log(module.exports === exports);

const fs = require('fs');

// const newdata = fs.readFileSync('data.js', 'utf8');
// console.log(newdata);
// console.log('-------------------');

fs.readFile('data.js', 'utf8',
   function (err, content) {
       console.log(content);
   }
);
console.log('-------------------');
