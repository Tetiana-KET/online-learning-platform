import { SliderPaginationItem } from '@components/SliderPaginationItem';
import { SLIDER_LENGTH } from '@consts/SLIDER_LENGTH';

export function renderSliderPagination() {
  const pagination = document.getElementById('favorite-pagination');
  for (let i = 0; i < SLIDER_LENGTH; i++) {
    pagination?.append(SliderPaginationItem());
  }
}
