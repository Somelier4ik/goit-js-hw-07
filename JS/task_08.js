const refs = {
  inputNumber: document.querySelector("#controls input[type=number]"),
  btnRender: document.querySelector("#controls button[data-action=render]"),
  btnDestroy: document.querySelector("#controls button[data-action=destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnRender.addEventListener("click", handleCreateBoxes);
refs.btnDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
  startBoxWidthHeigth = 20;
});
refs.inputNumber.addEventListener("input", handleWriteAmount);

let amount = 0;
function handleWriteAmount(event) {
  amount = event.currentTarget.value;
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 1)) + 1}, ${
    Math.floor(Math.random() * (255 - 1)) + 1
  }, ${Math.floor(Math.random() * (255 - 1)) + 1})`;
}

let startBoxWidthHeigth = 20;

function handleCreateBoxes() {
  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement("div");
    divRef.textContent = "div";
    divRef.style.backgroundColor = randomColor();
    divRef.style.width = `${startBoxWidthHeigth + 10}px`;
    divRef.style.height = `${startBoxWidthHeigth + 10}px`;
    startBoxWidthHeigth += 10;
    refs.boxes.appendChild(divRef);
    console.log(divRef.style.width);
  }
}
