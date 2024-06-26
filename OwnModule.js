/***********************************creating our own module*********** */
const myModule = require('./myModule');

const greeting = myModule.greet('Vaishali');
const sum = myModule.add(5, 2);

console.log(greeting); // Output: Hello, Alice!
console.log(`Sum: ${sum}`); // Output: Sum: 8


/************************************************************************* */