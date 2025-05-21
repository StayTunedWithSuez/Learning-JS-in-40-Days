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

console.log(person.address.Upazila);
console.log(person.address.zipCode);
person.address.greeting();


