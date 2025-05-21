
console.log("Hello kids! Let's play with 10 math problems.");
let count = 1;
let correctCount = 0;
let wrongCount = 0;


function mathQuizKids(){

    const firstNumb = Math.floor(Math.random()*100);
    const secondNumb = Math.floor(Math.random()*100);

    //Sign initializing
    const signNumb = Math.floor(Math.random()*2) + 1;

    let usrAns;

    switch(signNumb) {
        case 1 : 
            console.log(`Q${count}:  ${firstNumb} + ${secondNumb} = ?`);
            usrAns = parseInt(prompt("Answer: "));

            if(isNaN(usrAns)){
                return;
            } else if(usrAns === (firstNumb + secondNumb)){
                console.log(`${usrAns} is correct !`);
                correctCount ++;
            } else {
                console.log(`${usrAns} is Wrong. ${firstNumb} + ${secondNumb} = ${firstNumb + secondNumb}`);
                wrongCount ++;
            }
            break;

        case 2 : 
        console.log(`Q${count}:  ${firstNumb} - ${secondNumb} = ?`);
        usrAns = parseInt(prompt("Answer: "));

        if(isNaN(usrAns)){
            return;
        } else if(usrAns === (firstNumb - secondNumb)){
            console.log(`${usrAns} is correct !`);
            correctCount ++;
        } else {
            console.log(`${usrAns} is Wrong. ${firstNumb} + ${secondNumb} = ${firstNumb - secondNumb}`);
            wrongCount ++;
        }
        break;

    }
    count ++;
    if (count <= 10) {
        mathQuizKids();
    } else {
        console.log("Game Over !");
        console.log("Total correct answers = ", correctCount);
        console.log("Total wrong answers = ", wrongCount);
        console.log("Acuracy = ", (correctCount/10)*100);
    }
    
}

mathQuizKids();