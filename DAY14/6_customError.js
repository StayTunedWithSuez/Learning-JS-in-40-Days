//Custom Error

//This is a constructor function
function ValidationError(message) {
    this.name = "ValidationError",
    this.message = message;
    this.stack = new Error().stack;
}

//This line you don't have to understand write now
ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
    if (age <60) {
        throw new ValidationError("You are not a senior citizen");
    }
    return "You are a senior citizen";
}

try {
    const message = validateCitizen(55);
    console.log(message);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

