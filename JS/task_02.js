const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
  
];

const ingredientsRef = document.querySelector("#ingredients");

const createItem = function (arr) {
  const arrTagLiEl = arr.map((el) => {
    const tagLi = document.createElement("li");
    tagLi.textContent = el;

    return tagLi;
  });

  ingredientsRef.append(...arrTagLiEl);
};

createItem(ingredients);
