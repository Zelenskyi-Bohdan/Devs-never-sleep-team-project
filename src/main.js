const burgerMenuButtom = document.querySelector('#open-burger-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuDark = document.querySelector('.menu-darkener');
const closeMobileMenuButton = document.querySelector(
  '#close-mobile-menu-button'
);

burgerMenuButtom.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  mobileMenuDark.classList.add('is-open');
  document.body.classList.add('no-scroll');
});

closeMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  mobileMenuDark.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});

mobileMenu.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('menu-nav-link') ||
    event.target.classList.contains('menu-order-link') ||
    event.target.classList.contains('menu-logo')
  ) {
    mobileMenu.classList.remove('is-open');
    mobileMenuDark.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
});
