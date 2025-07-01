//6th mistake: Unnecessary try catch

// Redundant try-catch
new Promise((resolve, reject) => {
    try {
        const value = getValue();
        // do something with value
        resolve(value);
    } catch (e) {
        reject(e);
    }
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Better Way
new Promise((resolve, reject) => {
    const value = getValue();
    // do something with value
    resolve(value);
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));