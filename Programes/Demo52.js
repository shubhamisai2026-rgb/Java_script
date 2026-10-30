const marks = [80, 75, 90];

function greet() {
    console.log("Hello!");
}

console.log(typeof marks);  // object
console.log(typeof greet);  // function
greet()

console.log(typeof 100);
console.log(typeof 12.5);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

const values = [10, 20, 30];

console.log(Array.isArray(values));
console.log(typeof values)