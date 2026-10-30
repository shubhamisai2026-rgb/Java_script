const add = (a, b) => a + b;

console.log(add(10, 20));
console.log(add(100, 200));

// One parameter: parentheses are optional
const square = n => n * n;

// No parameters: parentheses are required
const greet = () => "Hello";

// Multiple parameters
const multiply = (a, b) => a * b;

console.log(square(5));
console.log(greet());
console.log(multiply(4, 3));