
const getStudent = () => {
    return {
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
}

const {stdName, subjects} = getStudent();
console.log(stdName, subjects);
//Output: John Williamson ['Maths', 'English', 'EVS']





