function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');
const bodyColor = document.querySelector('.widget');
buttonChange.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  const newColor = getRandomHexColor();
  changeColor.textContent = newColor;
  bodyColor.style.backgroundColor = newColor;
};

