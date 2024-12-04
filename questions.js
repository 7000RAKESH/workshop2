// questions
let score = 0;

let questions = document.querySelector(".questions");
let count = 60;

let obj = [
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    option1: "var",
    option2: "let",
    option3: "const",
    option4: "fixed",
  },
  {
    question: "What will be the output of: console.log(typeof []);",
    option1: "Array ",
    option2: "object",
    option3: "undefined",
    option4: "null",
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    option1: "push()",
    option2: "pop()",
    option3: "unshift()",
    option4: "shift()",
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    option1: "assigns a value",
    option2: "compares values",
    option3: "compare values and types",
    option4: "logic And",
  },
  {
    question:
      "Which function is used to parse a string to an integer in JavaScript?",
    option1: "Integer.parse()",
    option2: "parseInteger()",
    option3: "parseInt()",
    option4: "Number.parseInteger()",
  },
];

setInterval(() => {
  let time = document.querySelector(".time");
  time.innerHTML = ` Time : ${count--} `;
  if (count == -1) {
    // alert(`${score} is your score`);
    location.href = "./view.html";

    count = 60;
  }
}, 1000);

let details;
let i = 1;

for (item of obj) {
  details = item;
  questions.innerHTML += `
<p> ${i++} /${obj.length} questions</p>
  <p>${details.question}</p>
<button class="but">${details.option1}</button>
</br>
</br>
<button class="but">${details.option2}</button>
</br>
</br>
<button class="but">${details.option3}</button>
</br>
</br>
<button class="but">${details.option4}</button>
</br>
</br>
<button class="save">save</button>
`;
}

let buttons = document.querySelectorAll(".but");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let answers = button.innerHTML;
    console.log(answers);
    if (
      answers == "const" ||
      answers == "object" ||
      answers == "push()" ||
      answers == "compare values and types" ||
      answers == "parseInt()"
    ) {
      score++;
      console.log(score);
      localStorage.setItem("score", score);
    }
  });
});
