function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";
let boxSize = 30;

function createBoxes(amount) {
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};
    margin: 3px;"></div>`;
    boxSize += 10;
  }

  boxesEl.insertAdjacentHTML("afterbegin", markup);
  boxSize = 30;
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
  boxSize = 30;
};

createBtnEl.addEventListener("click", () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener("click", () => destroyBoxes());
