//Variables
var startButton = document.getElementById("start-btn");

var questionContainerElement = document.getElementById("question-container");

var endscreen = document.getElementById("end-screen");
var questionElement = document.getElementById("question-title");
var answerButtonsElement = document.getElementById("choices");
var finalscore = document.getElementById("final-score");

// to randomize the questions and stop quiz
var shuffledQuestions;
var currentQuestionIndex = 0;
var stoptimer;
var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
var initialsEl = document.getElementById("initials");
//question variables
var questions = [
  {
    question: "What is Hoisting in javascript?",
    answers: [
      { text: "Javascript doesn't response", correct: false },
      { text: "Unknow behavior", correct: false },
      {
        text: "it is a default bahavior of Javascript where all the variables and function declarations are moved on top.",
        correct: true,
      },
      { text: "There are codes that are missing", correct: false },
    ],
  },

  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      { text: "Angular", correct: false },
      { text: "jQuery", correct: false },
      { text: "RequireJS", correct: false },
      { text: "ESLint", correct: true },
    ],
  },
  {
    question: "which symbol is used for comments in javascript?",
    answers: [
      { text: "</", correct: false },
      { text: "!!", correct: false },
      { text: "/*", correct: true },
      { text: ".", correct: false },
    ],
  },
  {
    question: "What is === operator?",
    answers: [
      { text: "it is an error", correct: false },
      { text: "not aplicable ", correct: false },
      { text: "a strict equaly operator", correct: true },
    ],
  },
  {
    question: "What are JavaScript Data Types?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "boolean*", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];

let timeLeft = questions.length * 15;

/*for the timer*/
document.addEventListener("DOMContentLoaded", () => {
  const timeLeftDisplay = document.querySelector("#time-left");

  function countDown() {
    stoptimer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(stoptimer);
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startButton.addEventListener("click", countDown);
});

startButton.addEventListener("click", startGame);

//Function to start game
function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

//Function so currect questions clears for next question
function setNextQuestion() {
  // clearState();
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } else {
    questionContainerElement.classList.add("hide");
    endscreen.classList.remove("hide");
    finalscore.textContent = timeLeft;
    clearInterval(stoptimer);
  }
}
//Question appear
function showQuestion(question) {
  answerButtonsElement.textContent = "";
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    // if statment to check to see if the answer selected is the correct data attribute
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

//Event target used to select answers
function selectAnswer(e) {
  currentQuestionIndex++;
  setNextQuestion();
}

/*for the highscores*/
var submitButton = document.getElementById("submit");

var resultFinalScore = function (event) {
  event.preventDefault();
  var initialInput = document.querySelector("#initials").value;

  var scoreDataObj = {
    initial: initialInput,
    score: timeLeft,
  };
  // check if input values are empty strings
  if (!initialInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  highScoreArray.push(scoreDataObj);
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));
  createScoreListEl(scoreDataObj);
};

var createScoreListEl = function (scoreDataObj) {
  var listScoreEl = document.querySelector("#highScorelist");
  listScoreEl.className = "list-scores";

  for (let index = 0; index < highScoreArray.length; index++) {
    var scoreListEl = document.createElement("li");
    scoreListEl.className = "score-info";
    scoreListEl.innerHTML =
      "<h3 class='initials'>" +
      highScoreArray[index].initial +
      "<span class='final-score'> - " +
      highScoreArray[index].score +
      "</span> </h3>";

    listScoreEl.appendChild(scoreListEl);
  }

  endscreen.classList.add("hide");
  document.querySelector("#highScore-container").classList.remove("hide");
};

submitButton.addEventListener("click", resultFinalScore);

document.querySelector("#gobackbtn").addEventListener("click", function () {
  location.reload();
});
document.querySelector("#clearbtn").addEventListener("click", function () {
  localStorage.clear();
});
