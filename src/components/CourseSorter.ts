import { SORT_OPTIONS } from '@consts/SORT_OPTIONS';
import { Router } from '@controllers/Router';
import { toggleSelectOpen } from '@controllers/toggleSelectOpen';
import { SortByType } from '@models/SortByType';

export function CourseSorter() {
  const sortWrap = document.createElement('div');
  sortWrap.classList.add('actions__sort-wrap');
  sortWrap.id = 'sortWrap';
  const select = document.createElement('select');
  select.classList.add('actions__sort-items');

  SORT_OPTIONS.forEach(({ value, label }) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  sortWrap.append(select);

  select.addEventListener('change', (event) => {
    const sortBy = (event.target as HTMLSelectElement).value as SortByType;
    Router.galleryController?.handleSortChange(sortBy);
  });

  toggleSelectOpen(select);

  return sortWrap;
}
