var header = document.querySelector("#header");
var start = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var answersEl = document.querySelector("#answers");
var time = document.querySelector("#time");
var timer;
var clock = 100;
var highScoreTotal = document.querySelector("#high-scores");
var initialsEl = document.querySelector("#initials");
var quizOver = true;
var score = document.querySelector("#score");
var done = document.querySelector("#done");
var gameOver = document.querySelector("#gameOver");
var submit = document.querySelector("#submit");
var viewScores = document.querySelector("#view-scores");
var finalScore = 0;
var scoreBoard = [];
if (localStorage.getItem("scoreBoard")) {
    scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"))
};

var leaderboard = document.querySelector("#leaderboard");



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
        time.textContent = "Time: " + clock;
        if (clock === 0) {
            endGame();
        }
    }, 1000)
};

function endGame() {
    quizOver = true;
    clearInterval(timer);
    gameOver.classList.remove("hide");
    questionsEl.classList.add("hide");
    time.classList.add("hide");
    finalScore = clock;
    score.textContent = "Score: " + finalScore;
    
    

    
};





function checkAnswer() {
    console.log(this.dataset.value);
    if (questions[currentQuestion].answer === this.dataset.value) {
        currentQuestion++
        showQuestion()
    } else {
        clock -= 10
    }
};

function showQuestion() {
    header.classList.add("hide");
    questionsEl.classList.remove("hide");
    
    qTitle.textContent = questions[currentQuestion].question;

    answersEl.textContent = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        var button = document.createElement("button");
        button.textContent = questions[currentQuestion].choices[i];
        button.setAttribute("data-value", questions[currentQuestion].choices[i]);
        button.addEventListener("click", checkAnswer);
        answersEl.appendChild(button);

    };
    if (currentQuestion === questions.length - 1) {
        //go to end screen
        endGame();
    }
};



// renderHighScores();



submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = initialsEl.value;
    var userScore = finalScore;
    console.log(initials, userScore);
    var userData = {
        initials: initials,
        score: userScore,
    };

    scoreBoard.push(userData);
    console.log(scoreBoard);
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    
    showHighScores();
    gameOver.classList.add("hide");
});

function showHighScores() {
    for (let i = 0; i < scoreBoard.length; i++) {
        var highScore = document.createElement("li");
        highScore.textContent = scoreBoard[i];
        highScoreTotal.appendChild(highScore);
    };
    leaderboard.classList.remove("hide");
};

viewScores.addEventListener("click", function() {
    showHighScores();
});


start.addEventListener("click", function() {
    startTimer();
    showQuestion();
});

