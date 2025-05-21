

/* 
//Syntax of for loop
for (initialization; condition; update){
    //code
} 
*/

for(let count=1; count <= 4; count++){
    console.log("Number of iterations: ", count);
}

//Addition of even numbers between 1 to 100
let sum = 0;
for (let i=1; i <= 100; i++){
    if(i % 2 === 0){
        sum += i;
    }
}
console.log("The sum is: ", sum);
//Output: The sum is:  2550

//Printing characters from a string
let language ="JavaScript";
for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));
}
//Output: j a v a s c r i p t (Vertically)



//Multiple counters in one loop
for(i=1, j=5; i<=5 && j >= 1; i++, j--){
    console.log(i, j);
}
//Output: 1 5 then 2 4 then 3 3 then 4 2 then 5 1


//Nested loop (for multidimensional data)
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log("(Row, col): (",i,",",j,")");
    }
}

/* Output: 
(Row, col): ( 1 , 1 )
(Row, col): ( 1 , 2 )
(Row, col): ( 1 , 3 )
(Row, col): ( 2 , 1 )
(Row, col): ( 2 , 2 )
(Row, col): ( 2 , 3 )
(Row, col): ( 3 , 1 )
(Row, col): ( 3 , 2 ) */


//Break (Exiting from a loop)
for(let i=1; i<=5; i++){   
    if(i === 3) break;
    console.log(i);
} //Output: 1 2 (vertically)

//Continue (Skipping a particular iteration)
for(let i=1; i<=5; i++){   
    if(i === 3) continue;
    console.log(i);
} //Output: 1 2 4 5 (vertically)