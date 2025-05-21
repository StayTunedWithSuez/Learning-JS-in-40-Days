/* let profile = {

    //These are properties of this object
    personName: "Suez",
    company: "Google",

    //This function is called a method of this object
    message: function() {
        console.log(`${this.personName} works at ${this.company}`);
    }
}

console.log(profile.personName);
console.log(profile.company);
profile.message(); */


function profile(name, company){
    return{
        name,
        company,
        message(){
            console.log(`${this.name} works at ${this.company}`);
        }
    }
}

const profile1 = profile("Suez", "Google");
profile1.message();

