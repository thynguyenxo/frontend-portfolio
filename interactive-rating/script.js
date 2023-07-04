const ratingBtns = document.querySelectorAll('.rating button');
const submitBtn = document.getElementById('submit');
const thankyouCard = document.querySelector('.thankyou-card');
const userSelection = document.querySelector('.user-selection');

let selectedValue = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ratingBtns.forEach((otherBtn) => {
      otherBtn.classList.remove('selected');
    });
    btn.classList.toggle('selected');
    selectedValue = btn.innerHTML;
  });
});

submitBtn.addEventListener('click', () => {
  thankyouCard.classList.add('show');
  userSelection.textContent = selectedValue;
});



