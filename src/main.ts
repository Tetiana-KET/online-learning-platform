import { toggleHeaderMenu } from '@controllers/toggleHeaderMenu';
import { renderCourseItems } from './controllers/renderCourseItems';
import { Router } from './controllers/Router';
import './styles/style.scss';
import { toggleTopButton } from '@controllers/toggleTopButton';
window.addEventListener('DOMContentLoaded', () => {
  renderCourseItems();
  Router.init();
  toggleHeaderMenu();
  toggleTopButton();
});
