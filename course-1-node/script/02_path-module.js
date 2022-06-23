
const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));            // "\\" to specify back-slash as "\" is escape sharacter

console.log(path.dirname('C:\\temp\\myfile.html'));

console.log(path.extname(__filename));