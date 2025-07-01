//5th mistake: Using promises for synchronous operations

const cache = {
    "suez@gmail.com": {
        name: "Suez",
        org: "JavaScript",
    }
};

//Using promise like a synchronous way
const getDataV1 = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFromCash = cache[email];

            if(!userFromCash) {
                console.log("Made the call and updated cache");
            } else {
                console.log(`User details ${JSON.stringify(userFromCash)}`);
            }
        }, 2000);
    })
}

//getDataV1("suez@domain.com")



//Using promise in a proper asynchronous way
const getDataV2 = (email) => {
    const userFromCache = cache[email];
    if (userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Make the call and update cache");
            }, 2000);
        });
    }
};

getDataV2("suez@gmail.com");