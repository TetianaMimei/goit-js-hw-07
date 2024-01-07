const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)
function onFormSubmit(e) {
    e.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        return alert('All form fields must be filled in');
    }
    const userData = {
        email,
        password,
    };

    console.log(userData);
    form.reset();
}