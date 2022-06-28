const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
let form_container = document.querySelector('.form_container'),
    open_sign_in   = document.querySelector('.open_sign_in'),
    open_sign_up   = document.querySelector('.open_sign_up');


open_sign_in.addEventListener('click', toggle_form);
open_sign_up.addEventListener('click', toggle_form);


function toggle_form() {
    form_container.classList.toggle('active');
}