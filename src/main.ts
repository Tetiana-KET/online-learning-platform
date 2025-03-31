import { toggleHeaderMenu } from '@controllers/toggleHeaderMenu';
import { renderCourseItems } from './controllers/renderCourseItems';
import { Router } from './controllers/Router';
import './styles/style.scss';
window.addEventListener('DOMContentLoaded', () => {
  renderCourseItems();
  Router.init();
  toggleHeaderMenu();
});
