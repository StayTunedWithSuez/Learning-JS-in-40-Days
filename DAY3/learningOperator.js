

//Arithmatic Operators............................................
/* let a = 10;
let b = 20;
let c = 4;
let fName = "Suez", lName = "Sohan";

console.log(a+b); //Output: 30
console.log(a-b); //Output: -10
console.log(a*c); //Output: 40
console.log(a/c); //Output: 2.5
console.log(a%c); //Output: 2
console.log(c**3); //Output: 64
console.log(++c); //Output: 5 (pre-increment)
console.log(c++); //Output: 5 (post-increment)
console.log(--c); //Output: 5 (pre-decrement)
console.log(c--); //Output: 5 (post-decrement)
console.log(c); //Output: 4

console.log(fName+lName); //Output: SuezSohan
//Concatenation occurs here, but it's not good practice. */


//Assignment Operators.............................................
/* 1)	= (Assign)
2)	+= (Add and assign)
3)	-= (Subtract and assign)
4)	*= (Multiply and assign)
5)	/= (Divide and assign) */


/* let x = 30;

x += 5; // x = x + 5
console.log(x); //Output = 35
x -= 5; // x = x - 5
console.log(x); //Output = 30
x *= 2; // x = x * 2
console.log(x); //Output = 60
x /= 3; // x = x / 2
console.log(x); //Output = 20 */


//Comparision Operators.........................................
/* 1)	== (Equal to)
2)	=== (Strict equal - checks value & type)
3)	!= (Not equal)
4)	!== (Strict not equal)
5)	> (Greater than)
6)	< (Less than)
7)	>= (Greater than or equal to)
8)	<= (Less than or equal to) */


/* console.log(5 == 3) //Output: false
console.log(0 == false) //Output: true (loosely comparing)
console.log(0 === false) //Output: false (Strictly comparing)

console.log(3 == '3') //Output: true (loosely comparing)
console.log(3 === '3') //Output: false (Strictly comparing)

console.log(null === null); //Output: true

let obj1 = {fName:"Suez", lName:"Sohan"};
let obj2 = {fName:"Suez", lName:"Sohan"};
console.log(obj1 == obj2); 
//Output: false (As their memory locations are not same)


console.log(5 !=3 ); // Output: true
console.log(3 !== "3"); // Output: true (Strict)

console.log(5 > 5); //Output: false
console.log(5 >= 5); //Output: ture

console.log(8 < 9); //Output: true
console.log(8 <= 9) //Output: true */

//Logical Operators........................................

/* console.log(false && true); // Output: false
console.log(true && true); //Output: true
console.log(undefined && true); //Output: undefined
console.log(true && "Suez"); //Output: Suez
console.log("Suez" && "Sohan"); //Output: Sohan
console.log(4 > 5 && 4 === 5); //Output: false */

/* console.log(true || false); //Output: true
console.log(false || false); //Output: false
console.log(null || 8 >= 8); //Output: true
console.log("Suez" || "Sohan"); //Output: Suez
console.log(4 > 5 || 4 === 4); //Output: false */

/* console.log(null ?? true); //Output: true
console.log(undefined ?? "Suez")// Output: Suez
console.log("Suez" ?? "Sohan"); //Output: Suez
console.log(false ?? "Sohan"); //Output: false
console.log(0 ?? "Suez"); //Output: 0 */

/* console.log(!false);  //Output: true
console.log(!null); //Output: true
console.log(!"Suez"); //Output: false
console.log(!undefined); //Output: true
console.log(!0); //Output: true */


//Conditional or ternary operator...........................

/* let age = 22;
let citizenType;

citizenType = age >= 60 ? "Senior Citizen" : "Non Senior Citizen";

console.log(citizenType); //Output: Non Senior Citizen */


//Bitwise Operators............................................


//console.log(15 & 9) //Output:  9
/* Explanation:
            1111   (15 in binary)
          & 1001   (9 in binary)
          --------
            1001   (9 in binary) */


//console.log(15 || 9); //Output: 15
/* Explanation:
            1111   (15 in binary)
         || 1001   (9 in binary)
          --------
            1111   (15 in binary) */

//console.log(15 ^ 9); //Output: 6
/* Explanation:
            1111   (15 in binary)
         ^  1001   (9 in binary)
          --------
            0110   (6 in binary) */

//console.log(~9); //Output: -10
/* Explanation:
        1) Convert 9 to 8-bit binary: 00001001.
        2) Apply Bitwise NOT (~), inverting all bits: 11110110.
        3) Convert the result back to decimal (Two’s complement): -10.*/




//console.log(9 << 2); //Output: 36
/* Explanation:
            1001   (9 in binary)
          << 2   
          --------
            100100   (36 in binary)
    1001 shifted 2 places left and
    blank places filled with 00 */

//console.log(9 >> 2); //Output: 36
/* Explanation:
            1001   (9 in binary)
            >> 2   
            --------
            0010  (2 in binary)
    Shifts all bits 2 places to the right,
    removing the rightmost bits. */


//Grouping Operator...................................

/* let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); //Output: 7
console.log((p + q) * r); //Output: 9 */

//Type of operator...................................

/* let myName = "Suez";
console.log(typeof myName); //Output: string

let numb = [1, 2, 3, 4];
console.log(typeof numb); //Output: object
//Because arrays are also object in JS

console.log(typeof null); //Output: object
//People say this is a mistake in JS */


