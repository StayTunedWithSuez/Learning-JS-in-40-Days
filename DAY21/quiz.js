const quizData = [
    {
        question: "What does DOM stands for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],
        correct: 1
    },
    {
        question: "Which method selects by ID?",
        options: [
            "getElementById()",
            "querySelectorAll()",
            "getElement()",
            "getElementsByClassName()"
        ],
        correct: 0
    },
    {
        question: "Which event fires on input change?",
        options: ["click", "submit", "change", "keydown"],
        correct: 2
    },

]

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

let questions = [...quizData].sort(() => Math.random()-0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    timer = setInterval(countdown, 1000);

    const q = questions[currentQuestion];
    questionElem.textContent = `Q${currentQuestion + 1}: ${q.question}`;
    optionsElem.innerHTML = "";

    q.options.forEach((option, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.classList.add("option-btn");
        optionBtn.textContent = option;
        optionBtn.addEventListener("click", () => selectAnswer(index, true))
        optionsElem.appendChild(optionBtn);
    });

    nextBtn.style.display = "none";
}

function countdown() {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct, false)
    }
}

function updateTimer() {
    timerElem.textContent = timeLeft === 0 ? "Time Over" : `⏱️ ${timeLeft}`;
}

function selectAnswer(index, shouldScore) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn) => btn.disabled = "true");

    if(index === q.correct) {
        shouldScore && score ++;
        buttons[index].classList.add("correct");
    } else {
        buttons[q.correct].classList.add("correct");
        buttons[index].classList.add("wrong");
    }
    nextBtn.style.display = "inline-block";
}


nextBtn.addEventListener("click", () => {
    currentQuestion++;
    
    if(currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    [timerElem, questionElem, optionsElem, nextBtn].forEach((element) => element.style.display = "none");
    resultElem.innerHTML = `<h2> Your Score: ${score} </h2>`;

    const reStartBtn = document.createElement("button");
    reStartBtn.textContent = "Restart Quiz";
    reStartBtn.classList.add("restart-btn");
    reStartBtn.addEventListener("click", () => {
        questions = [...quizData].sort(() => Math.random()-0.5);
        currentQuestion = 0;
        score = 0;

        resultElem.innerHTML = "";
        [timerElem, questionElem, optionsElem, nextBtn].forEach((element) => element.style.display = "");
        loadQuestion();
    });
    resultElem.appendChild(reStartBtn);

}

loadQuestion();