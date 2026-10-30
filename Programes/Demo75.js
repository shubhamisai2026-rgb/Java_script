const word = "CODE";

for (const charact of word) {
    console.log(charact);
}

const student = {
    name: "Shubham",
    age: 22,
    course: "MSc IMCA"
};

for (const key in student) {
    console.log(key, student[key]);
}