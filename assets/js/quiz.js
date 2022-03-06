//need an array for questions
var questions = [
  {
    question: "Which of the following can be used to redirect a url using JavaScript?",
    choices: ["document.location =", "browser.location =", "navigator.location =", "window.location ="],
    answer: "window.location =",
  },
  {
    question: "Which of the following type of variable is visible only within a function where it is defined?",
    choices: ["global variable", "local variable", "Both of the above.", "None of the above."],
    answer: "local variable",
  },
  {
    question: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the above."],
    answer: "Both",
  },
  {
    question: "Which of the following can be used to return a Number's value?",
    choices: ["toString();", "valueOf();", "toLocaleString();", "toPrecision();"],
    answer: "valueOf();",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
    answer: "2names",
  },
];

function quiz() {
  console.log(questions);
}
//event listener which starts the quiz
var startBtn = document.querySelector("#start-quiz");
startBtn.onclick = quiz;

//create a countdown timer

//variables which target html elements
