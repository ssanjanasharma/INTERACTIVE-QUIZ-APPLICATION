const questions = [
  // Easy
  {
    question: "What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Adding interactivity to web pages",
      "Creating databases",
      "Writing server configuration"
    ],
    answer: 1
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
    answer: 1
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["var", "int", "define", "letvar"],
    answer: 0
  },
  {
    question: "Which symbol is used for assignment?",
    options: ["=", "==", "===", "!="],
    answer: 0
  },
  {
    question: "Which method shows a pop-up box?",
    options: ["alert()", "msg()", "prompt()", "popup()"],
    answer: 0
  },

  // Medium
  {
    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function = myFunc()",
      "def myFunc()",
      "function myFunc()",
      "create myFunc()"
    ],
    answer: 2
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: [".push()", ".add()", ".insert()", ".append()"],
    answer: 0
  },
  {
    question: "How do you check the data type of a variable?",
    options: ["typeof", "type()", "getType()", "checktype"],
    answer: 0
  },
  {
    question: "What does `===` mean in JavaScript?",
    options: [
      "Assignment",
      "Compare value and type",
      "Compare only value",
      "Strict assignment"
    ],
    answer: 1
  },
  {
    question: "What is the output of: console.log(typeof null)?",
    options: ["null", "object", "undefined", "NaN"],
    answer: 1
  },

  // Hard
  {
    question: "Which scope does `let` have?",
    options: ["Global", "Function", "Block", "Script"],
    answer: 2
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function with no return value",
      "A function bundled with its lexical scope",
      "A global variable",
      "A way to close browser tabs"
    ],
    answer: 1
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Bootstrap", "Vue.js", "Laravel", "SASS"],
    answer: 1
  },
  {
    question: "What does 'this' refer to in a regular function?",
    options: [
      "The function itself",
      "The global object",
      "The parent object",
      "The called object"
    ],
    answer: 1
  },
  {
    question: "Which function is used to delay execution?",
    options: ["setDelay()", "wait()", "delay()", "setTimeout()"],
    answer: 3
  }
];

let currentQ = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const optionList = document.getElementById('optionList');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const resultCard = document.getElementById('resultCard');
const scoreDisplay = document.getElementById('scoreDisplay');

function loadQuestion() {
  const q = questions[currentQ];
  questionText.innerText = `Q${currentQ + 1}: ${q.question}`;
  optionList.innerHTML = '';
  feedback.innerText = '';
  nextBtn.style.display = 'none';

  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.innerText = opt;
    li.addEventListener('click', () => checkAnswer(i, li));
    optionList.appendChild(li);
  });
}

function checkAnswer(selectedIndex, element) {
  const correctIndex = questions[currentQ].answer;

  Array.from(optionList.children).forEach(opt => {
    opt.classList.remove('correct', 'wrong');
    opt.style.pointerEvents = 'none';
  });

  if (selectedIndex === correctIndex) {
    element.classList.add('correct');
    feedback.innerText = "✅ Correct!";
    score++;
  } else {
    element.classList.add('wrong');
    feedback.innerText = "❌ Incorrect!";
    optionList.children[correctIndex].classList.add('correct');
  }

  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector('.quiz-card').style.display = 'none';
  resultCard.style.display = 'block';
  scoreDisplay.innerText = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
