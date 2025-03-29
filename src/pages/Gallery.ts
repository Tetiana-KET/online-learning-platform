import { CourseFilter } from '@components/CourseFilter';
import { SearchInput } from '@components/SearchInput';

export function Gallery() {
  const gallerySection = document.createElement('section');
  const galleryContainer = document.createElement('div');
  const galleryActions = document.createElement('div');

  gallerySection.classList.add('gallery');
  galleryContainer.classList.add('gallery__container');
  galleryActions.classList.add('gallery__actions', 'actions');

  gallerySection.append(galleryContainer);
  galleryContainer.append(galleryActions);
  galleryActions.append(SearchInput(), CourseFilter());

  return gallerySection;
}
