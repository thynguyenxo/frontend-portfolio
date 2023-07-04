const form = document.querySelector('.form');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.getElementById('error-msg');
const proceedBtn = document.getElementById('submit-btn');

proceedBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMsg.textContent = 'Please provide a valid email';
    errorIcon.style.display = 'block';
    email.classList.add('error');
  } else {
    errorMsg.textContent = '';
    errorIcon.style.display = 'none';
  }
}

function defaultDisplay() {
  errorMsg.textContent = '';
  errorIcon.style.display = 'none';
}

defaultDisplay();