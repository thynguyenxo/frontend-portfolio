const form = document.querySelector('.form');
const email = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');


form.addEventListener('submit', () => {
  form.preventDefault();
});


function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    email.style.borderColor = 'red';
    errorMsg.classList.add('error');
  } else {
    email.style.borderColor = 'var(--blue)';
    errorMsg.classList.remove('error');
  }
}
