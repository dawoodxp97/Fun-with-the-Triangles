const quizForm = document.querySelector(".quiz-form");

const submitBtn = document.querySelector("#is-submit");

const output = document.querySelector("#output");

const correctAns = ["90°", "right angled", "equilateral", "isosceles"];

function calculateScore(e) {
  e.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAns[index]) {
      score++;
    }
    index++;
  }
  output.innerText = "Your Score is " + score;
}
submitBtn.addEventListener("submit", calculateScore);
