const student=
{
    name:"shubham"
}
function getName()
{
    return student.name;
}
const getName2 = getName.bind(student);
name2=getName2();
console.log(name2);
