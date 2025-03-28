import { SliderPaginationItem } from '@components/SliderPaginationItem';
import { SLIDER_LENGTH } from '@consts/SLIDER_LENGTH';

export function renderSliderPagination() {
  const pagination = document.getElementById('favorite-pagination-items');
  for (let i = 0; i < SLIDER_LENGTH; i++) {
    pagination?.append(SliderPaginationItem());
  }
  const firstItem = pagination?.firstChild as Element;

  if (firstItem) {
    firstItem.classList.add('pagination__item_active');
  }
}
