import { Button } from './Button';

export function Pagination(currentPage = 1, totalPages = 1, loadCourses: (page: number, append: boolean) => void) {
  const paginationWrap = document.createElement('div');
  paginationWrap.className = 'pagination';
  paginationWrap.id = 'pagination';

  const firstPageBtn = Button('<<', 'pagination__button', currentPage === 1);
  const prevPageBtn = Button('<', 'pagination__button previous', currentPage === 1);
  const pageCounter = Button(currentPage.toString(), 'pagination__button pagination__counter', false);
  const nextPageBtn = Button('>', 'pagination__button next', currentPage === totalPages);
  const lastPageBtn = Button('>>', 'pagination__button', currentPage === totalPages);

  firstPageBtn.addEventListener('click', () => loadCourses(1, false));
  prevPageBtn.addEventListener('click', () => loadCourses(currentPage - 1, false));
  nextPageBtn.addEventListener('click', () => loadCourses(currentPage + 1, false));
  lastPageBtn.addEventListener('click', () => loadCourses(totalPages, false));

  paginationWrap.append(firstPageBtn, prevPageBtn, pageCounter, nextPageBtn, lastPageBtn);

  return paginationWrap;
}
