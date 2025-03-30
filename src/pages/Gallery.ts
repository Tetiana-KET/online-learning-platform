import { CourseFilter } from '@components/CourseFilter';
import { Pagination } from '@components/Pagination';
import { SearchInput } from '@components/SearchInput';

export function Gallery(currentPage: number, totalPages: number, loadCourses: (page: number) => void) {
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

  const paginationWrap = Pagination(currentPage, totalPages, loadCourses);
  galleryContainer.append(paginationWrap);

  galleryActions.append(SearchInput(), CourseFilter());

  return gallerySection;
}
