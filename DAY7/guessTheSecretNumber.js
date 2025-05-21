function guessTheSecretNumber(){

    console.log("Guess a number between 1 to 10 :");

    //Generating computer choice randomly
    const computerChoice = Math.floor(Math.random()*10) + 1;

    //Variable declaration to count user attempt
    let attemptCount = 0;

    //Function to get user input and comparing with the generated value
    function comparingTheNumbers(){

        //Getting user input
        let userInput = parseInt(prompt("Guess a number between 1 to 10 :"));

        attemptCount ++;

        //Comparing logics
        if (Number.isInteger(userInput) && userInput <= 10 && userInput >= 1){
            if(userInput > computerChoice){
                console.log(`${userInput} is a higher value.`);
                comparingTheNumbers();

            } else if (userInput < computerChoice){
                console.log(`${userInput} is a lower value.`);
                comparingTheNumbers();

            } else if (userInput === computerChoice){
                console.log(`Wow! ${userInput} is the correct value.`);
                console.log(`Total attempts: ${attemptCount}`);
                let playAgain = prompt("Do you want to play again (yes/no): ").toLocaleLowerCase();
                if(playAgain === "yes"){
                    guessTheSecretNumber();
                } else {
                    console.log("That was fun! See you next time.");
                }
            } else {
                console.log("Something went wrong !");
            }
        } else{
            console.log("Invalid input. Please try again...");
        }
    }
    
    //Calling the comparingTheNumbers function to perform repeated task
    comparingTheNumbers();
}

//Calling the main function guessTheSecretNumber
guessTheSecretNumber();



