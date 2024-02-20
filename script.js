const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.querySelector('.burger');

burgerBtn.addEventListener('click', function() {
  if (burgerMenu.style.display === 'none' || burgerMenu.style.display === '') {
    burgerMenu.style.display = 'block';
  } else {
    burgerMenu.style.display = 'none';
  }
});


// const fifthNavItem = document.querySelector('.nav__item:nth-child(5)'); 

// fifthNavItem.addEventListener('mouseenter', function() {
//   const popupMenu = this.querySelector('.nav__popup');
//   popupMenu.classList.add('is-active');
// });

// fifthNavItem.addEventListener('mouseleave', function() {
//   const popupMenu = this.querySelector('.nav__popup');
//   popupMenu.classList.remove('is-active');
// });



const headerArrowText = document.getElementById('burger__text-arrow');
const burgerPopup = document.querySelector('.nav__popup-mobile');

headerArrowText.addEventListener('click', function() {
  if (burgerPopup.style.display === 'none' || burgerPopup.style.display === '') {
    burgerPopup.style.display = 'block';
  } else {
    burgerPopup.style.display = 'none';
  }
});

const headerArrow = document.getElementById('header__arrow');
const burgerTextArrow = document.getElementById('burger__text-arrow');

burgerTextArrow.addEventListener('click', function() {
  headerArrow.classList.toggle('rotated');
});

