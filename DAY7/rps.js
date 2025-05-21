function rockPaperScissorsGame(){
    console.log("Hello Rock, Paper & Scissors !");

    //Taking input from user
    const userChoicePrompt = prompt("Enter Rock, Paper or Scissors: ");

    //Converting the input string to lower case
    let userChoice = userChoicePrompt.toLowerCase();

    console.log("User's choice: ", userChoice);
    
    //Generating computer choice
    const randomNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice;

    //Adjoining the randomNumber to a string value
    switch (randomNumber) {
        case 1 :
            computerChoice = "rock";
            break;
        case 2 :
            computerChoice = "paper";
            break;
        case 3 : 
            computerChoice = "scissors";
            break;
        default:
            console.log("Invalid computer choice!");
            
    }
    console.log("Computer's choice: ", computerChoice);

    //Game logics
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("The winner is *** User ***");
    } else if (userChoice === computerChoice) {
        console.log("The game is a Tie");
    } else if(
        (userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log("The winner is *** Computer ***");
    } else {
        console.log("Please check the input and try again...");
    }

    //Asking user if play again or not
    const playAgainPrompt = prompt("Play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes"){
        rockPaperScissorsGame();
    } else {
        console.log("Thanks a lot. See you again !");
    }

}

//Calling the function
rockPaperScissorsGame();