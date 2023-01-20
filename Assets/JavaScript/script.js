var quizEl = document.querySelector("#questions");

var questions = [
    {
        question: "What HTML element is the JavaScript placed in?",
        answers: {
            1: "Section",
            2: "Script",
            3: "Head",
            4: "href"
        },
        correctAnswer: '2'
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            1: "alert('Hello World')",
            2: "alertBox('Hello World')",
            3: "msgBox('Hello World')",
            4: "msg('Hello World')"
        },
        correctAnswer: '1'
    }
];

quizEl.textContent = questions;
