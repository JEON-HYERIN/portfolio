const toggleBtn = document.querySelector('.header__toggleBtn');
const menuEl = document.querySelector('.header__menu');


toggleBtn.addEventListener('click', function() {
  menuEl.classList.toggle('clicked');
});
