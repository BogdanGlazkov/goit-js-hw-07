const listEl = document.querySelector("#categories");
const listElItems = document.querySelectorAll(".item");

const categories = (categories) => {
  console.log(`Number of categories: ${listEl.children.length}`);
  categories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
  });
};
categories(listElItems);
