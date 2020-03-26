const fs = require('fs');
const path = require('path');

const openFileAndPrint =  (dir) => (fileName) => fs.readFile(path.join(dir, fileName), (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});


openFileAndPrint(__dirname)('Gu.html');

// console.log(path.join(__dirname, ));


var abc = [1,2,3,4,5];

console.log(abc.join(' '));


fs.open(path.join(__dirname, 'gu2.js'), (err , data)=>{
    if(err) throw err;
    console.log(data);
});