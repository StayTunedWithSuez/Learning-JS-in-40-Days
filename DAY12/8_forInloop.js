let person = {
    personName: "Suez",
    university: "CUET",
    message: function(){
        console.log(`${this.personName} studies at ${this.university}`);
    },
    //This is the nested object
    address: {
        Upazila: "Raozn",
        zipCode: 4340,
        City: "Chattogram",
        Country: "Bangladesh",
        greeting: function(){
            console.log(`Welcome to ${this.City}`);
        }
    }
}

//Getting keys and values using for...in loop
for(let key in person) {
    console.log(key);
    console.log(person[key]);
}

//Getting Keys using Object.keys() method
console.log(Object.keys(person));





