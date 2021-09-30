const inputs = document.querySelectorAll(".area-input");
const areaSubmit = document.querySelector("#is-submit");
const areaOutput = document.querySelector("#area-output");
function multiplyBaseAndHeight(base, height) {
  const multipliedOutput = base * height;
  return multipliedOutput;
}

function calculateArea(e) {
  e.preventDefault();
  //area = (base * height)/2
  const basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
  const area = basexheight / 2;
  areaOutput.innerText = `The area of the triangle is ${area} cm²`;
}

areaSubmit.addEventListener("submit", calculateArea);
