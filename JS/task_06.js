const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("focusout", inputValidateHandler);

function inputValidateHandler() {
  if (inputRef.value.length < 6) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
