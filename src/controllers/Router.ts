import { disableCurrentLink } from '@utils/disableCurrentLink';
import { renderContacts } from './renderContacts';
import { renderHome } from './renderHome';
import { renderNotFound } from './renderNotFound';
import { SliderController } from './SliderController';
import { renderCourseDetails } from './renderCourseDetails';
import { scrollToSection } from '@utils/scrollToSection';
import { GalleryController } from './GalleryController';

export const Router = {
  currentSlider: null as SliderController | null,
  galleryController: null as GalleryController | null,

  init: () => {
    const currentRoute = window.location.pathname;
    Router.navigate(currentRoute, false);
    Router.bindLinks();

    window.addEventListener('popstate', (e) => {
      Router.navigate(e.state.route || '/', false);
    });
  },

  bindLinks: () => {
    document.querySelectorAll('[data-link]').forEach((link) => {
      link.removeEventListener('click', Router.handleLinkClick as EventListener);
      link.addEventListener('click', Router.handleLinkClick as EventListener);
    });
  },

  handleLinkClick: (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const url = target.getAttribute('href') || '/';
    Router.navigate(url);
  },

  navigate: (route: string, addToHistory = true) => {
    if (route === '#mentors') {
      scrollToSection(route);
      return;
    }

    if (Router.currentSlider) {
      Router.currentSlider.destroy();
      Router.currentSlider = null;
    }

    if (Router.galleryController) {
      Router.galleryController.destroy();
      Router.galleryController = null;
    }

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    disableCurrentLink(route);

    switch (true) {
      case route === '/':
        renderHome();
        break;
      case route === '/gallery' || route.startsWith('/gallery/'):
        Router.galleryController = new GalleryController();
        break;
      case route === '/contacts':
      case route === '/contacts#about':
        renderContacts();
        scrollToSection(route);
        break;
      case route.startsWith('/course/'):
        const coursePath = route.split('/')[2];
        renderCourseDetails(coursePath);
        break;
      default:
        renderNotFound();
    }
    Router.bindLinks();
  },
};
