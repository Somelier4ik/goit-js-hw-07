const categoriesEl = document.querySelector("#categories");

const countAndLogCategories = function (list) {
  console.log(`У списку ${list.children.length} категорії.`);

  const arrChildren = [...list.children];

  arrChildren.map((el, i) => {
    console.log(`Категорія: ${el.firstElementChild.textContent}`);
    console.log(`Кількість елементів: ${el.querySelectorAll("li").length}`);
  });
};

countAndLogCategories(categoriesEl);
