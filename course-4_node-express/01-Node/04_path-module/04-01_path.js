const path = require('path');

const pathObj = {
    separator:      path.sep,
    join:           path.join('a', 'b', 'c'),
    basename:       path.basename(path.join('a', 'b', 'c')),

    // path.resolve creates absoulte path from right to left until an absolute path is constructed
    resolve_1:      path.resolve('/a', 'b', 'c'),
    resolve_2:      path.resolve('/a', '/b', 'c'),
    resolve_3:      path.resolve('/a', '/b', '/c'),
    resolve_4:      path.resolve('a', 'b', 'c')          //C:\{current_working_directory}\a\b\c  
}

console.log(pathObj);

