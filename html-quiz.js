const questions = [
  // Easy
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Text Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which tag is used for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<hr>"],
    answer: 2
  },
  {
    question: "What tag makes text bold in HTML?",
    options: ["<i>", "<strong>", "<bold>", "<bld>"],
    answer: 1
  },
  {
    question: "Which HTML element is used for inserting an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: 0
  },
  {
    question: "Which tag creates a numbered list?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: 2
  },

  // Medium
  {
    question: "What attribute is used to provide a tooltip in HTML?",
    options: ["tooltip", "alt", "title", "label"],
    answer: 2
  },
  {
    question: "How do you make a hyperlink open in a new tab?",
    options: [
      'target="_blank"',
      'href="newtab"',
      'window="new"',
      'link-mode="external"'
    ],
    answer: 0
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    answer: 0
  },
  {
    question: "Which tag is used for creating a checkbox?",
    options: ["<checkbox>", "<check>", "<input type='box'>", "<input type='checkbox'>"],
    answer: 3
  },
  {
    question: "What is the purpose of the `<label>` tag?",
    options: [
      "To add a label to text",
      "To name the page",
      "To associate a text label with a form control",
      "To label a paragraph"
    ],
    answer: 2
  },

  // Hard
  {
    question: "Which tag is used to define a table row?",
    options: ["<td>", "<tr>", "<table>", "<row>"],
    answer: 1
  },
  {
    question: "What does the 'alt' attribute in an <img> tag do?",
    options: [
      "Changes alignment",
      "Sets alternative text for image",
      "Adds animation",
      "Links image to another page"
    ],
    answer: 1
  },
  {
    question: "How can you group several form elements in HTML?",
    options: ["<formset>", "<fieldset>", "<group>", "<section>"],
    answer: 1
  },
  {
    question: "What tag is used to embed video in HTML5?",
    options: ["<media>", "<movie>", "<embed>", "<video>"],
    answer: 3
  },
  {
    question: "What tag is used to define a client-side script (like JavaScript)?",
    options: ["<script>", "<js>", "<code>", "<program>"],
    answer: 0
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
