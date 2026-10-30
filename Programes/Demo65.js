const name = "Shubham";

const java = 85;
const dbms = 78;
const javascript = 92;

const total = java + dbms + javascript;
const average = total / 3;

console.log(`Student: ${name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);

if (java < 40 || dbms < 40 || javascript < 40) {
    console.log("Result: Fail");
} else if (average >= 90) {
    console.log("Result: Pass");
    console.log("Grade: A+");
} else if (average >= 80) {
    console.log("Result: Pass");
    console.log("Grade: A");
} else if (average >= 70) {
    console.log("Result: Pass");
    console.log("Grade: B");
} else {
    console.log("Result: Pass");
    console.log("Grade: C");
}