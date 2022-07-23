import { a1, b1, c1 as user1, d1 } from './02-02_export-1.js';
import user, { a2, b2, d2 } from './02-03_export-2.js';

console.log(a1);
console.log(b1('Arijit'));
console.log(new user1('Arijit', 'Das').fullName());
console.log(d1(22));

console.log(a2);
console.log(b2('Arijit'));
console.log(new user('Arijit', 'Das').fullName());
console.log(d2(22));
