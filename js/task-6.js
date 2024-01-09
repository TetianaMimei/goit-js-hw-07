function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const inputCreate = document.querySelector('.controls-input');
const createButton = document.querySelector('.controls-create');
const destroyButton = document.querySelector('.controls-destroy');
const containerCreate = document.querySelector('#boxes');

createButton.addEventListener('click', onButtonClick);
destroyButton.addEventListener('click', destroyBoxes);

function onButtonClick() {
  const amount = inputCreate.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount)
  }
}

function createBoxes(amount) {
  containerCreate.innerHTML = '';
    for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = `${30 + i * 10}px`;
    createDiv.style.height = `${30 + i * 10}px`;
    containerCreate.appendChild(createDiv);
    };
    inputCreate.value = '';
};

function destroyBoxes() {
  containerCreate.innerHTML = '';
};

