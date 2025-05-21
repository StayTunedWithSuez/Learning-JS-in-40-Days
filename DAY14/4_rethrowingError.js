// Rethrow

function validateForm(formData) {
    try{
        if(!formData.userName) throw new Error("User name is mandatory");
        if(!formData.email.includes("@")) throw new Error("Invalid email format");
    }catch(error){
        console.error("Validation issues found:", error.message);

        //Rethrowing error (doesn't need to create a new Error)
        throw error;
    }
}

try {
    validateForm({username: "Suez", email: "bademail"});
} catch (error) {
    console.error("Showing error message for user creation", error.message)
}

