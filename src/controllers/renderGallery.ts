import { Gallery } from '@pages/Gallery';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { renderGalleryCards } from './renderGalleryCards';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { getPaginatedCourses } from '@utils/getPaginatedCourses';

let currentPage;
let totalPages = 1;
const courses: Course[] = coursesRaw as Course[];

export function loadCourses(page: number = 1) {
  currentPage = page;

  const { coursesOnPage, totalPages: newTotalPages } = getPaginatedCourses(page, courses);
  totalPages = newTotalPages;

  renderGallery(coursesOnPage, currentPage, totalPages);
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function renderGallery(courses: Course[], currentPage: number, totalPages: number) {
  appendNodeToRoot(Gallery(currentPage, totalPages, loadCourses));
  renderGalleryCards(courses);
}
