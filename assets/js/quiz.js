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

var seconds = 60;
var timer;
function myFunction() {
  if (seconds < 60) {
    // I want it to say 1:00, not 60
    document.querySelector("#time-remaining").innerHTML = seconds;
  }
  if (seconds > 0) {
    // so it doesn't go to -1
    seconds--;
  } else {
    clearInterval(timer);
  }
}
document.querySelector("#time-remaining").onclick = function () {
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000); // every second
  }
};

function quiz() {
  if (seconds < 60) {
    // I want it to say 1:00, not 60
    document.querySelector("#time-remaining").innerHTML = seconds;
  }
  if (seconds > 0) {
    // so it doesn't go to -1
    seconds--;
  } else {
    clearInterval(timer);
  }
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000); // every second
  }
}
//event listener which starts the quiz
var startBtn = document.querySelector("#start-quiz");
startBtn.addEventListener("click", quiz);

//create a countdown timer

//variables which target html elements
