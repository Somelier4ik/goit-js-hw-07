const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("focusout", inputValidateHandler);

const minAmount = Number(inputRef.dataset.length);

function inputValidateHandler() {
  if (inputRef.value.length === minAmount) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

