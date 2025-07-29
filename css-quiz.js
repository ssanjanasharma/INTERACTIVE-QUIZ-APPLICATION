const questions = [
  // Easy
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax"
    ],
    answer: 1
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    answer: 2
  },
  {
    question: "Which property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "Which is the correct CSS syntax to change background color?",
    options: [
      "bg-color: red;",
      "background-color = red;",
      "color-background: red;",
      "background-color: red;"
    ],
    answer: 3
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-weight", "font-style", "text-transform", "bold"],
    answer: 0
  },

  // Medium
  {
    question: "Which value of position property makes the element stay fixed during scroll?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: 3
  },
  {
    question: "How do you apply a class named 'highlight' in CSS?",
    options: [".highlight", "#highlight", "*highlight", "highlight:"],
    answer: 0
  },
  {
    question: "Which CSS unit is relative to the parent element?",
    options: ["em", "px", "%", "vw"],
    answer: 0
  },
  {
    question: "How do you select all <p> tags inside a div?",
    options: ["div > p", "div p", "p div", "div.p"],
    answer: 1
  },
  {
    question: "What property changes the spacing between lines of text?",
    options: ["text-spacing", "line-height", "word-spacing", "letter-spacing"],
    answer: 1
  },

  // Hard
  {
    question: "What does the 'z-index' property do?",
    options: [
      "Controls zoom level",
      "Sets transparency",
      "Changes stacking order",
      "Controls display delay"
    ],
    answer: 2
  },
  {
    question: "Which CSS pseudo-class targets the first child of a parent?",
    options: [":first", ":first-child", "::first-line", ":nth-child(1)"],
    answer: 1
  },
  {
    question: "Which value allows flex items to wrap onto multiple lines?",
    options: ["wrap", "break", "multiline", "nowrap"],
    answer: 0
  },
  {
    question: "Which CSS function lets you use variables?",
    options: ["css-var()", "var()", "value()", "--var()"],
    answer: 1
  },
  {
    question: "How do you apply a transition on hover for all properties?",
    options: [
      "transition: hover;",
      "on-hover: transition;",
      "transition: all 0.3s;",
      "hover-transition: 0.3s;"
    ],
    answer: 2
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

// Initial load
loadQuestion();
