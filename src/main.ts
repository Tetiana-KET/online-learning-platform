import { renderCourseItems } from '@utils/renderCourseItems';
import './styles/style.scss';
import { renderSliderCard } from '@utils/renderSliderCard';
import { renderSliderPagination } from '@utils/renderSliderPagination';
window.addEventListener('DOMContentLoaded', () => {
  renderCourseItems();
  renderSliderCard();
  renderSliderPagination();
});
