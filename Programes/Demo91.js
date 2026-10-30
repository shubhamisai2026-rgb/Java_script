function calculateTotal(marks) {
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    return total;
}

function calculateAverage(marks) {
    return calculateTotal(marks) / marks.length;
}

function getResult(marks) {
    for (const mark of marks) {
        if (mark < 40) {
            return "Fail";
        }
    }

    return "Pass";
}

const marks = [85, 88, 92];

const total = calculateTotal(marks);
const average = calculateAverage(marks);
const result = getResult(marks);

console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Result:", result);