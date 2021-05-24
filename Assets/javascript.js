/*for the timer*/
document.addEventListener("DOMContentLoaded", () => {
  const timeLfetDisplay = document.querySelector("#time-left");
  const startBtn = document.querySelector("start-btn");
  let timeLeft = 10;

  function countDown() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }
  startButon.addEventListener("click", countDown);
});

//Variables start button, next button, questions and buttons
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

//Variable to randomize the questions
var shuffledQuestions, currentQuestionIndex;

//Start and Next click events
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
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
  clearState();

  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
//Question appear
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    // if statment4 to check to see if the answer selected is the correct data attribute
    if (answer.correct) {
      button.dataset.correct = answer.corret;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
// clear answer buttons for next set
function clearState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
//Event target used to select answers
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  // if else to run through the length of the questions
  if (shuffledQuestions.length > currentQuestionsIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
  nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

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
