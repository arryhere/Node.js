const obj1 = require('./02-07_export-1.js')
const obj2 = require('./02-08_export-2.js')
const obj3 = require('./02-09_export-3.js')
const {a, b, c, d} = require('./02-10_export-4.js')

console.log(obj1.a)
console.log(obj1.b('Arijit'))
console.log(new obj1.c('Arijit', 'Das').fullName())
console.log(obj1.d(22));


console.log(obj2.a)
console.log(obj2.b('Divya'))
console.log(new obj2.c('Divya', 'Jain').fullName())
console.log(obj2.d(21));


console.log(obj3.a)
console.log(obj3.b('Rohini'))
console.log(new obj3.c('Rohini', 'Kheyr').fullName())
console.log(obj3.d(24));


console.log(a)
console.log(b('Vani'))
console.log(new c('Vani', 'Rain').fullName())
console.log(d(22));