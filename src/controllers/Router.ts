import { renderContacts } from './renderContacts';
import { renderGallery } from './renderGallery';
import { renderHome } from './renderHome';
import { renderNotFound } from './renderNotFound';
import { SliderController } from './SliderController';

export const Router = {
  currentSlider: null as SliderController | null,

  init: () => {
    Router.navigate('/');
    document.querySelectorAll('[data-link]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const url = target.getAttribute('href') || '/';
        Router.navigate(url);
      });
    });
    window.addEventListener('popstate', (e) => {
      Router.navigate(e.state.route, false);
    });
  },
  navigate: (route: string, addToHistory = true) => {
    if (Router.currentSlider) {
      Router.currentSlider.destroy();
      Router.currentSlider = null;
    }

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    switch (route) {
      case '/':
        renderHome();
        break;
      case '/gallery':
        renderGallery();
        break;
      case '/contacts':
        renderContacts();
        break;
      case '/contacts#about':
        renderContacts();
        break;
      default:
        renderNotFound();
    }
  },
};
