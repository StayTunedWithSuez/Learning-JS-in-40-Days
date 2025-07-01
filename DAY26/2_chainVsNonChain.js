//2nd mistake: Chain and no chain misconception problem

const ten = new Promise((resolve, reject) => {
    resolve(10);
});

//This is a chain
ten
    .then(result => {
        return result + 5;
    })
    .then (result => {
        return result*2;
    })
    .then (result => {
        return result/2;
    })
    .then (result => {
        console.log(result);
    })

//This is not a chain
ten
    .then(result => {
        return result + 5;
    })
    ten.then (result => {
        return result*2;
    })
    ten.then (result => {
        return result/2;
    })
    ten.then (result => {
        console.log(result);
    })