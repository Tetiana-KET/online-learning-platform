import { CourseFilter } from '@components/CourseFilter';
import { CourseSorter } from '@components/CourseSorter';
import { Pagination } from '@components/Pagination';
import { SearchInput } from '@components/SearchInput';

export function Gallery(
  currentPage: number,
  totalPages: number,
  loadCourses: (page: number, append: boolean) => void,
  onSearch: (query: string) => void,
) {
  const gallerySection = document.createElement('section');
  const galleryContainer = document.createElement('div');
  const galleryActions = document.createElement('div');
  const courseCardsWrap = document.createElement('div');

  gallerySection.classList.add('gallery');
  galleryContainer.classList.add('gallery__container');
  galleryActions.classList.add('gallery__actions', 'actions');
  courseCardsWrap.classList.add('gallery__cards');
  courseCardsWrap.id = 'galleryCards';

  gallerySection.append(galleryContainer);
  galleryContainer.append(galleryActions, courseCardsWrap);
  galleryActions.append(SearchInput(onSearch), CourseFilter(), CourseSorter());

  const paginationWrap = Pagination(currentPage, totalPages, loadCourses);

  const showMoreButton = document.createElement('button');
  showMoreButton.id = 'showMoreButton';
  showMoreButton.textContent = 'Show More';
  showMoreButton.classList.add('show-more-btn');
  showMoreButton.addEventListener('click', () => {
    currentPage++;
    loadCourses(currentPage, true); // кнопка тоже же вызывает ту  же функцию, поему при клике на нее не показывается лоадер?
    //хотя задержка срабатывает
  });

  if (currentPage >= totalPages) showMoreButton.style.display = 'none';

  galleryContainer.append();
  galleryContainer.append(showMoreButton, paginationWrap);

  return gallerySection;
}
