const sides = document.querySelectorAll(".side-input");
const hypotenuseSubmit = document.querySelector("#is-submit");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");
function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse(e) {
  e.preventDefault();
  //c = sqrt(a^2 + b^2)
  const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
  console.log(sumOfSquares);
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  console.log(lengthOfHypotenuse);
  hypotenuseOutput.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}

hypotenuseSubmit.addEventListener("submit", calculateHypotenuse);