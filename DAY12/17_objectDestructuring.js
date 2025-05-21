
//Let's take an array for example
const students = [
    {
        'name': 'William',
        'grade': 'A'
    },

    {
        'name': 'Tom',
        'grade': 'A+'
    },

    {
        'name': 'Bob',
        'grade': 'B'
    }

];

for (let {name, grade} of students) {
    console.log(name, grade);
}



