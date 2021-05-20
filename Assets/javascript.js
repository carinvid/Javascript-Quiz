const startButton = document.getElementById("start-btn");

const quizContainerElement = document.getElementById("quiz-container");

startButton.addEventListener("click", startQuiz);

const shuffleQuestions, currentQuestionIndex

const questions = [
  {
    question: "What is Hoisting in javascript?",
    answers: {
      a: "Javascript doesn't response",
      b: "Unknow behavior",
      c: "it is a default bahavior of Javascript where all the variables and function declarations are moved on top.",
      d: "There are codes that are missing",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
  {
    question: "which symbol is used for comments in javascript?",
    answers: {
      a: "</",
      b: "//",
      c: "/*",
      d: " b and c",
    },
    correctAnswer: "d",
  },
  {
    question: "What is === operator?",
    answers: {
      a: "a strict equaly operator",
      b: "it is an error",
      c: "not aplicable ",
      d: "none",
    },
    correctAnswer: "a",
  },
  {
    question: "What are JavaScript Data Types?",
    answers: {
      a: "Number",
      b: "String",
      c: "Boolean",
      d: "All above",
    },
    correctAnswer: "d",
  },
];

const score = 0;

function startTime() {}

function startQuiz() {
  console.log("started")
  startButton.classList.add('hide')
  quizContainerElement.classList.remove('hide')
  setNextQuestion()


}

function setScore() {}
