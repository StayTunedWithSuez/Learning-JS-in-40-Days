function createUser(name, age) {
    return{
        name, // Works like, name: name
        age // Works like, age: age
    }
}

const user1 = createUser("Suez", 23);
console.log(user1);

const user2 = createUser("Sohan", 30);
console.log(user2);


