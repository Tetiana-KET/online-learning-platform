import { renderCourseItems } from './controllers/renderCourseItems';
import { renderSliderCard } from './controllers/renderSliderCard';
import { renderSliderPagination } from './controllers/renderSliderPagination';
import './styles/style.scss';
window.addEventListener('DOMContentLoaded', () => {
  renderCourseItems();
  renderSliderCard();
  renderSliderPagination();
});
