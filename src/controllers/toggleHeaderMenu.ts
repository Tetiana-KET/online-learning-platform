const burgerButton = document.querySelector('.header__burger');
const burgerOverlay = document.querySelector('.header__burger-overlay');
const body = document.body;
const headerBurgerMenu = document.querySelector('.header__nav');

function lockBodyScroll() {
  body.classList.add('no-scroll');
}

function unlockBodyScroll() {
  body.classList.remove('no-scroll');
}

function openBurgerMenu() {
  headerBurgerMenu?.classList.add('header__nav_open');
  burgerButton?.classList.add('menu-open');
  burgerOverlay?.classList.add('menu-open');
  lockBodyScroll();
}

function closeBurgerMenu() {
  headerBurgerMenu?.classList.remove('header__nav_open');
  burgerButton?.classList.remove('menu-open');
  burgerOverlay?.classList.remove('menu-open');
  unlockBodyScroll();
}

export function toggleHeaderMenu() {
  burgerButton?.addEventListener('click', () => {
    body.classList.contains('no-scroll') ? closeBurgerMenu() : openBurgerMenu();
  });

  document.addEventListener('click', (event) => {
    if (
      (event.target as HTMLElement).closest('.header__nav') ||
      (event.target as HTMLElement).classList.contains('header__burger-overlay')
    ) {
      closeBurgerMenu();
    }
  });
}
