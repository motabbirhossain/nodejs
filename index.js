const path = require('path');
const fs = require('fs');
const { log } = require('console');
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

// console.log(global);
//  fs.readFile('file.txt', (err, data) => {
//     console.log(data.toString());
// });

fs.writeFile('./text/big.txt','hello there',(err, data)=>{
    console.log('file create');
});

// eventEmitter.on('bellRing',()=>{
//     console.log('we need to run!');
// });
// setTimeout(() => {
//     eventEmitter.emit('bellRing','seckend');
// }, 1000);