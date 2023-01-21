var header = document.querySelector("#header");
var start = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var answersEl = document.querySelector("#answers");
var time = document.querySelector("#time");
var timer;
var clock = 100;



// var questions = [
//     "What HTML element is the JavaScript placed in?","How do you write 'Hello World' in an alert box?", "How do you call a function named 'myFunction'?", "How can you add a comment for a single line in JavaScript?", "How can you add a comment that has more than one line?", "JavaScript is the same as Java.", "Is JavaScript case-sensitive?", "How do you declare a JavaScript variable?"
// ];

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
]

var answr1 = [
    "Section", "Script", "Head", "href"
];

var answr2 = [
    "alert('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')"
];

var answr3 = [
    "function() myFunction()", "myFunction()", "call myFunction()", "call function() myFunction()"
];

var answr4 = [
    "/*This is a comment*/", "'This is a comment'", "!!This is a comment", "//This is a comment"
];

var answr5 = [
    "//This is a multi-line comment", "!/This is a multi-line comment/!", "/*This is a multi-line comment*/", "/&This is a multi-line comment&/"
];

var answr6 = [
    "True", "False"
];

var answr7 = [
    "Yes", "No"
];

var answr8 = [
    "var quizName", "call var Quiz-Name", "var Quiz-Name", "v quizName"
];

var currentQuestion = 0;

function startTimer() {
    timer = setInterval(function(){
        clock--
        time.textContent = clock
    }, 1000);
};


function checkAnswer() {
    console.log(this.dataset.value);
    if (questions[currentQuestion].answer === this.dataset.value) {
        currentQuestion++
        showQuestion()
    } else {
        clock -= 10
    }
    if (currentQuestion === questions.length - 1) {
        //go to end screen
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

    }
}



start.addEventListener("click", showQuestion);