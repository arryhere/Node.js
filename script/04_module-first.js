// const simple = require('./05_module-second.mjs');

import {simple1} from './05_module-second.mjs'
import {simple2} from './05_module-second.mjs'
import {simple3 as simple} from './05_module-second.mjs'
import simple444 from './05_module-second.mjs'
import simple555 from './05_module-second.mjs'
import {simple5, simple6} from './05_module-second.mjs'

import * as simp from './05_module-second.mjs'


simple1();
simple2();

simple();

simple444();
simple555();

simple5();
simple6();

console.log(simp);
console.log(simp.default());
