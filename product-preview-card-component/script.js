const button = document.querySelector('.cta-btn');
const popup = document.querySelector('.pop-up');

button.addEventListener('click', () => {
  popup.classList.toggle('active');
});

