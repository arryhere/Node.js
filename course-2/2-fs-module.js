const fs = require('fs');

let text = fs.readFileSync('course-2/file.txt', 'utf-8');
console.log(text);

text = text.replace('world', 'Mars');

fs.writeFileSync('course-2/file2.txt', text);
text = fs.readFileSync('course-2/file2.txt', 'utf-8');
console.log(text);
