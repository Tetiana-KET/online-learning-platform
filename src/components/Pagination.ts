import { Button } from './Button';

export function Pagination(currentPage = 1, totalPages = 1) {
  const paginationWrap = document.createElement('div');
  paginationWrap.className = 'pagination';

  const firstPageBtn = Button('<<', 'pagination__button', currentPage === 1);
  const prevPageBtn = Button('<', 'pagination__button previous', currentPage === 1);
  const pageCounter = Button(currentPage.toString(), 'pagination__button pagination__counter', true);
  const nextPageBtn = Button('>', 'pagination__button next', currentPage === totalPages);
  const lastPageBtn = Button('>>', 'pagination__button', currentPage === totalPages);

  paginationWrap.append(firstPageBtn, prevPageBtn, pageCounter, nextPageBtn, lastPageBtn);

  return paginationWrap;
}
