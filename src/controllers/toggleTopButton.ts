import { scrollToTop } from '@utils/scrollToTop';

export function toggleTopButton() {
  window.addEventListener('scroll', () => {
    const button = document.getElementById('topButton');

    if (!button) return;

    button.addEventListener('click', scrollToTop);
    if (window.scrollY > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });
}
