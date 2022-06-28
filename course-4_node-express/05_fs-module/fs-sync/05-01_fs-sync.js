const fs = require('fs');

const file1 = fs.readFileSync('./05_fs-module/fs-sync/05-00_file1.txt', 'utf-8');
const file2 = fs.readFileSync('./05_fs-module/fs-sync/05-00_file2.txt', 'utf-8');

console.log(file1);
console.log(file2);

fs.writeFileSync('./05_fs-module/fs-sync/05-00_file3.txt', ``);
fs.writeFileSync('./05_fs-module/fs-sync/05-00_file3.txt', `${file1}\n${file2}\n`, {flag: 'a'});