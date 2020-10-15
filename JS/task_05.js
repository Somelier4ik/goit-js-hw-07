const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", inputHandler);

function inputHandler(event) {
  if (event.currentTarget.value === "") {
    refs.output.textContent = "незнайомець";
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
