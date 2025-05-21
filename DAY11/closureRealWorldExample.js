
// Function to create a bank account with an initial balance
function createBankAccount(initialBalance) {
    let balance = initialBalance; // 'balance' is a private variable inside the closure

    return {
        // Method to deposit money
        deposit: (amount) => {
            balance = balance + amount; // Updates the private 'balance' variable
            console.log("Deposited: ", amount, "Current Balance: ", balance);
        },
        // Method to withdraw money
        withdraw: (amount) => {
            if (amount > balance) {
                console.warn("Insufficient Balance"); // Prevents overdrawing
            } else {
                balance = balance - amount; // Deducts from private 'balance' variable
                console.log("Withdrawn: ", amount, "Current Balance: ", balance);
            }
        },
        // Method to check the balance
        checkBalance: () => {
            console.log("Current Balance: ", balance); // Accesses the private 'balance'
        }
    }
}

// Creating an account with an initial balance of 500
const suezAccount = createBankAccount(500);

// Performing transactions
suezAccount.deposit(200);   // Output: Deposits 200, balance becomes 700
suezAccount.withdraw(100);  // Output: Withdraws 100, balance becomes 600
suezAccount.checkBalance(); // Output: Checks balance, prints 600


