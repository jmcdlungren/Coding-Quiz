var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var li = document.createElement("li");



const questions = [
    "What HTML element is the JavaScript placed in?","How do you write 'Hello World' in an alert box?", "How do you call a function named 'myFunction'?", "How can you add a comment for a single line in JavaScript?", "How can you add a comment that has more than one line?", "JavaScript is the same as Java.", "Is JavaScript case-sensitive?", "How do you declare a JavaScript variable?"
];

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




questionsEl.textContent = questions[3];
