export function disableCurrentLink(route: string) {
  document.querySelectorAll('[data-link]').forEach((link) => {
    const target = link as HTMLAnchorElement;
    const href = target.getAttribute('href') || '';

    if (href === route || (route.startsWith('/gallery') && href === '/gallery')) {
      target.classList.add('disabled-link');
      target.setAttribute('aria-disabled', 'true');
      target.closest('li')?.classList.add('disabled-link');
      target.closest('li')?.setAttribute('aria-disabled', 'true');
    } else {
      target.classList.remove('disabled-link');
      target.removeAttribute('aria-disabled');
      target.closest('li')?.classList.remove('disabled-link');
      target.closest('li')?.removeAttribute('aria-disabled');
    }
  });
}
