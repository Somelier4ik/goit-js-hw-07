const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.btnDecr.addEventListener("click", btnDecrHandler);
refs.btnIncr.addEventListener("click", btnIncrHandler);

function btnDecrHandler() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function btnIncrHandler() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
