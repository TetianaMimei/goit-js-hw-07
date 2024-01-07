const userName = document.querySelector('.js-input');
const userText = document.querySelector('.js-span')
userName.addEventListener('input', onInputText);
function onInputText() {
    const name = userName.value.trim();
    userText.textContent = name || 'Anonymous';
}
