export function SliderPaginationItem() {
  const paginationItem = document.createElement('li');
  paginationItem.classList.add('favorite__pagination-item');

  const progress = document.createElement('div');
  progress.classList.add('favorite__pagination-progress');

  paginationItem.append(progress);

  return paginationItem;
}
