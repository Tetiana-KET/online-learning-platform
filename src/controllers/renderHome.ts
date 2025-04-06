import { Home } from '@pages/Home';
import { renderSliderPagination } from './renderSliderPagination';
import { renderSliderCard } from './renderSliderCard';
import { SliderController } from './SliderController';
import { Router } from './Router';
import { renderBestMentorsSection } from './renderBestMentorsSection';

export function renderHome() {
  const appContent = document.getElementById('appContent');
  (appContent as HTMLElement).innerHTML = '';
  appContent?.append(Home());
  renderSliderPagination();
  renderSliderCard();
  renderBestMentorsSection();
  setTimeout(() => {
    Router.currentSlider = new SliderController('favoriteSlider');
  }, 0);
}
