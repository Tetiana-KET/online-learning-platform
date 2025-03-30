import { Pagination } from '@components/Pagination';

export function updatePagination(
  currentPage: number,
  totalPages: number,
  loadCourses: (page: number, append: boolean) => void,
) {
  const paginationContainer = document.getElementById('pagination');
  if (paginationContainer) {
    paginationContainer.replaceWith(Pagination(currentPage, totalPages, loadCourses));
  }
}
