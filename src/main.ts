import { renderCourseItems } from './controllers/renderCourseItems';
import { renderSliderCard } from './controllers/renderSliderCard';
import { renderSliderPagination } from './controllers/renderSliderPagination';
import { SliderController } from './controllers/SliderController';
import './styles/style.scss';
window.addEventListener('DOMContentLoaded', () => {
  renderCourseItems();
  renderSliderPagination();
  renderSliderCard();

  new SliderController('favoriteSlider');
});
