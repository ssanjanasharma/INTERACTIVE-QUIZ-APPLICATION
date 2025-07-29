const questions = [
  // Easy
  {
    question: "What is React?",
    options: [
      "A CSS framework",
      "A JavaScript library for building UIs",
      "A database system",
      "A JavaScript compiler"
    ],
    answer: 1
  },
  {
    question: "What command creates a new React app?",
    options: [
      "npm create react-app",
      "npx create-react-app",
      "npm new react",
      "create-react"
    ],
    answer: 1
  },
  {
    question: "What syntax is used to write UI in React?",
    options: ["HTML", "JavaScript", "JSX", "XML"],
    answer: 2
  },
  {
    question: "Which method is used to render React to the DOM?",
    options: [
      "React.mount()",
      "ReactDOM.render()",
      "React.render()",
      "renderDOM()"
    ],
    answer: 1
  },
  {
    question: "Which hook is used for state in a function component?",
    options: ["useEffect", "useState", "setState", "useRef"],
    answer: 1
  },

  // Medium
  {
    question: "What does useEffect do?",
    options: [
      "Manages component state",
      "Directly changes DOM",
      "Performs side effects in components",
      "Adds routing functionality"
    ],
    answer: 2
  },
  {
    question: "Which prop gives a unique ID to list items?",
    options: ["id", "name", "key", "ref"],
    answer: 2
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A server-side DOM",
      "A lightweight copy of the real DOM",
      "A CSS file",
      "A memory leak issue"
    ],
    answer: 1
  },
  {
    question: "What is the default value of a React prop?",
    options: ["null", "undefined", "false", "0"],
    answer: 1
  },
  {
    question: "How do you handle forms in React?",
    options: [
      "Using jQuery",
      "Using Redux only",
      "With controlled components",
      "By calling DOM APIs directly"
    ],
    answer: 2
  },

  // Hard
  {
    question: "Which hook is used for referencing DOM nodes?",
    options: ["useRef", "useDom", "useMemo", "useElement"],
    answer: 0
  },
  {
    question: "How do you prevent unnecessary re-renders?",
    options: [
      "useMemo & React.memo",
      "forceUpdate()",
      "deepClone()",
      "useState only"
    ],
    answer: 0
  },
  {
    question: "Which lifecycle runs after every render?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "useEffect (no dependency)",
      "useEffect([])"
    ],
    answer: 2
  },
  {
    question: "What is lifting state up?",
    options: [
      "Removing all props",
      "Moving state to a common ancestor component",
      "Using Redux only",
      "Passing state to useRef"
    ],
    answer: 1
  },
  {
    question: "What is React Fragment?",
    options: [
      "Component for transitions",
      "Wrapper component that doesn’t render DOM",
      "Built-in animation",
      "JSX converter"
    ],
    answer: 1
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
