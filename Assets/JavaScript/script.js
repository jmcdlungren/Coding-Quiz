var header = document.querySelector("#header");
var start = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var answersEl = document.querySelector("#answers");
var time = document.querySelector("#time");
var timer;
var clock = 100;
var highScore = document.querySelector("#high-scores");
var initials = document.querySelector("#initials");





var questions = [
    {
        question: "What HTML element is the JavaScript placed in?",
        choices: ["Section", "Script", "Head", "href"],
        answer: "Script"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["alert('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["function() myFunction()", "myFunction()", "call myFunction()", "call function() myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "How can you add a comment for a single line in JavaScript?",
        choices: ["/*This is a comment*/", "'This is a comment'", "!!This is a comment", "//This is a comment"],
        answer: "//This is a comment"
    },
    {
        question: "How can you add a comment that has more than one line?",
        choices: ["//This is a multi-line comment", "!/This is a multi-line comment/!", "/*This is a multi-line comment*/", "/&This is a multi-line comment&/"],
        answer: "/*This is a multi-line comment*/"
    },
    {
        question: "JavaScript is the same as Java.",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "Is JavaScript case-sensitive?",
        choices: ["Yes", "No"],
        answer: "Yes"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["var quizName", "call var Quiz-Name", "var Quiz-Name", "v quizName"],
        answer: "var quizName"
    }
];


var currentQuestion = 0;

function startTimer() {
    timer = setInterval(function(){
        clock--
        time.textContent = clock
    }, 1000);
};

function endGame() {
    questionsEl.classList.add("hide");
    highScore.textContent = clock;
};

function checkAnswer() {
    console.log(this.dataset.value);
    if (questions[currentQuestion].answer === this.dataset.value) {
        currentQuestion++
        showQuestion()
    } else {
        clock -= 10
    }
    if (currentQuestion === questions.length) {
        //go to end screen
        endGame();
        
    }
};

function showQuestion() {
    startTimer();
    header.classList.add("hide");
    questionsEl.classList.remove("hide");
    
    qTitle.textContent = questions[currentQuestion].question;

    answersEl.textContent = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[currentQuestion].choices[i]
        button.setAttribute("data-value", questions[currentQuestion].choices[i]);
        button.addEventListener("click", checkAnswer);
        answersEl.appendChild(button);

    };
};



start.addEventListener("click", showQuestion);