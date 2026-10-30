const createStudent = (name, marks,age) => ({
    name: name,
    marks: marks,
    age:age
});

console.log(createStudent("Shubham", 90,23));

const Welcome = () => {
    return "Welcome to React";
};

console.log(Welcome())