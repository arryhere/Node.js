/*
• CommonJS - every file is a module
• Modules  - encapsulated code (only share minimum)
• module, package, dependency - all means the same thing
• *check 02-02 and 02-03
*/

const names = require('./02-02_names');
const print_name = require('./02-03_print_name');

console.log(names);
console.log(print_name);

print_name(names.name_1);
print_name(names.name_2);
print_name(names.name_3);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

const data = require('./02-04_alternative-format')
console.log(data);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

require('./02-05_mind-grenade')