
const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// const f2 = fs.readFileSync('file.txt', 'utf8')
// console.log(f2);

// fs.writeFile('file2.txt', 'Hello 2 World', ()=>{
//     console.log('Written to the file');
// })

const f3 = fs.writeFileSync('file2.txt', 'Hello 2 sync World');
console.log(f3);

console.log('End of Line');