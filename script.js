const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.querySelector('.burger');

burgerBtn.addEventListener('click', function() {
  if (burgerMenu.style.display === 'none' || burgerMenu.style.display === '') {
    burgerMenu.style.display = 'block';
  } else {
    burgerMenu.style.display = 'none';
  }
});
