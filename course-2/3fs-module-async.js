
const fs = require('fs');

fs.readFile('course-2/file.txt', 'utf-8', (err, data)=>{
    console.log(err, data);
})

console.log('END OF LINE');