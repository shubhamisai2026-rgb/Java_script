function greet(name = "Student") {
    return `Hello, ${name}!`;
}

console.log(greet("Shubham"));
console.log(greet());
console.log(greet(undefined));
console.log(greet(null));

function run2(name2)
{
    return `Hello,${name2}!`;
}
console.log(run2("shubham"))