const student = {
    'stdName': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com',
    },
    'address': {
        'street': '65/2, Brooklyn Road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}

function sendEmail(studdent){
    console.log(`Sent an email to ${studdent.parents.email}`);
}
sendEmail(student); //Output: Sent an email to john-parents@abcde.com

//Instead of doing this we can write
function sendEmail({parents: {email}}){
    console.log(`Sent an email to ${email}`);
}
sendEmail(student); //Output: Sent an email to john-parents@abcde.com






/*
const {address} = student;
const zip = address.zip
console.log(zip); //Output: 5791
*/

/* //Instead of doing this we can write
const {address: {zip}} = student;
console.log(zip); //Output: 5791 */






/* const {std: standard} = student;
console.log(std); //Output: Error
console.log(standard); //Output: 3 */




/* //Creating a new variable using object destructuring with default value
const {stdName, age, meal="bread"} = student
console.log(stdName, age, meal); // Output: John Williamson 9 bread

//Another example for an array
const {subjects, numberOfSubjects = subjects.length} = student;
console.log(subjects); //Output: ['Maths', 'English', 'EVS']
console.log(numberOfSubjects); //Output: 3 */






/*
let stdName = student.stdName;
const age = student.age;
console.log(stdName, age); //Output: John Williamson 9
*/

/* //Instead of doing this using object destructuring we can write
const {stdName, age} = student;
console.log(stdName, age); //Output: John Williamson 9 */



