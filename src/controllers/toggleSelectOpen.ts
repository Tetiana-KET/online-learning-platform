export function toggleSelectOpen(element: HTMLSelectElement) {
  element.addEventListener('click', () => {
    element.closest('div')?.classList.toggle('open');
  });

  element.addEventListener('blur', () => {
    element.closest('div')?.classList.remove('open');
  });
}
