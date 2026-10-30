function test() {
    console.log("First");
    return 100;
    console.log("Second");
}

console.log(test());

const add=function(a, b) {
    return a + b;
};

console.log(add(10, 20));

console.log(square(4));
function square(n) {
    return n * n;
}

// console.log(square(4)); // ReferenceError

const square2 = function(n) {
    return n * n;
};
console.log(square(4))


const add2 = (a, b) => {
    return a + b;
};

console.log(add2(10, 20));