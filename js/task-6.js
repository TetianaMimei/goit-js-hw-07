function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const inputCreate = document.querySelector('.controls-input');
const buttonCreate = document.querySelector('.controls-create');
const buttonDestroy = document.querySelector('.controls-destroy');
const containerCreate = document.querySelector('#boxes');

buttonCreate.addEventListener('click', onButtonClick);
buttonDestroy.addEventListener('click', destroyBoxes);

function onButtonClick(e) {
  createBoxes(inputCreate.value);
};

function createBoxes(amount) {
  if (inputCreate.value >= 1 && inputCreate.value <= 100) {
    containerCreate.innerHTML = '';
    for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = `${30 + i * 10}px`;
    createDiv.style.height = `${30 + i * 10}px`;
    containerCreate.appendChild(createDiv);
    };
    inputCreate.value = '';
  }
};

function destroyBoxes() {
  inputCreate.value = '';
  containerCreate.innerHTML = '';
};

