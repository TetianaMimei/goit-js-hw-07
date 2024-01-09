function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');
buttonChange.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  const newColor = getRandomHexColor();
  colorSpan.textContent = newColor;
  document.body.style.backgroundColor = newColor;
};

