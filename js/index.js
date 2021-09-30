const inputs = document.querySelectorAll(".angle-input");

const submitForm = document.getElementById("submit-form");

const output = document.getElementById("output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle(e) {
  e.preventDefault();
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerHTML = "🤩Yay, the angles forms a Triangle.🔥";
  } else {
    output.innerHTML = "😲 Oh oh! The angles don't form a triangle";
  }
}

submitForm.addEventListener("submit", isTriangle);
