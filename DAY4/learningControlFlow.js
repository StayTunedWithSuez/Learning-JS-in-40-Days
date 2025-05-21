

let catchingBus = true;

if(catchingBus) {
    console.log("I will reach home on time.");
} else {
    console.log("I will be late to reach.");
}
//Output: I will reach home on time.

let age = 17;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//Output: You are not eligible to vote.


if (age >= 18)
    console.log("You are eligible to vote.");
else
    console.log("You are not eligible to vote.");
//It aslo works but never ever omit the curly braces


//Grading system
let score = 70;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score < 70) {
    console.log("Fail");
}
//Output: Grade C

//Nested if-else
let outerCondition = true;
let innerCondition = false;

if (outerCondition) {
    console.log("Outer if");
    if (innerCondition){
        console.log("Inner if");
    } else {
        console.log("Inner else");
    }
} else {
    console.log("Outer else");
}
//Output: Inner else


let dayNumb = 4;

switch (dayNumb) {
    case 1 :
        console.log("Saturday");
        break;
    case 2 :
        console.log("Sunday");
        break;
    case 3 :
        console.log("Monday");
        break;
    case 4 :
        console.log("Tuesday");
        break;
    case 5 :
        console.log("Wednesday");
        break;
    case 6 :
        console.log("Thursday");
        break;
    case 7 :
        console.log("Friday");
        break;
    default: 
        console.log("Invalid day number!");
}
//Output: Tuesday

let enterName = "Lion";

switch (enterName) {
    case "Apple":
        console.log("This is a fruit.");
        break;
    case "Lion":
        console.log("This is an animal.");
        break;
    case "Pen":
        console.log("This is an object.");
        break;
    default:
        console.log("No match found!");
}
//Output: This is an animal.

const city = "Jamalpur"

switch (city) {
    case "Dhaka":
    case "Chattogram":
    case "Jamalpur":
    case "Mymensingh":
        console.log("It in Bangladesh");
        break;
    case "New York":
    default:
        console.log("It is in USA");
}
//Output: Jamalpur
//For New York or any other value default will run.
