// What is the difference between import and require?
///One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.


// How can you enable using the import syntax using node js
// by using module.export= ' 

// Give 2 node.js environment variables that are not available
// when using the import syntax.

// 1)process


// Create 3 functions using the export/import syntax.
const {sum,multi,min}=require('./3functions')
console.log(sum(1,2));
console.log(multi(4,4));
console.log(min(10,4));

// Import the file system module using the import syntax.

import fs from 'fs'

fs.appendFileSync('new.txt','here is from import ')