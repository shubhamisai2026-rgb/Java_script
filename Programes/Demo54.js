console.log(5 == "5");
console.log(5 === "5");

console.log(0 == false);
console.log(0 === false);

const studentName = "Shubham";

const subject1 = 80;
const subject2 = 75;
const subject3 = 90;

const total = subject1 + subject2 + subject3;
const average = total / 3;

console.log(`Student: ${studentName}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(100)}`);

if (average >= 40) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}