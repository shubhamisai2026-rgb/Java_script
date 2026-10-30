function greet(name) {
    console.log(`Hello, ${name}`);
}

function processUser(callback) {
    callback("Shubham");
}

processUser(greet);