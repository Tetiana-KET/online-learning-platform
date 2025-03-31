import { Gallery } from '@pages/Gallery';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { renderGalleryCards } from './renderGalleryCards';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { getPaginatedCourses } from '@utils/getPaginatedCourses';
import { updatePagination } from '@utils/updatePagination';
import { NotFound } from '@pages/NotFound';
import { sortBy } from '@utils/sortBy';
import { SortByType } from '@models/SortByType';

let currentPage = 1;
let totalPages = 1;
const courses: Course[] = coursesRaw as Course[];
const sortedCourses: Course[] = sortBy([...courses]);
let filteredCourses: Course[] = [...sortedCourses];

export function renderGallery() {
  appendNodeToRoot(Gallery(currentPage, totalPages, loadCourses, handleSearch));
  renderGalleryCards(filteredCourses);
}

export function loadCourses(page: number = 1, append: boolean, courses: Course[] = filteredCourses) {
  currentPage = page;
  const { coursesOnPage, totalPages: newTotalPages } = getPaginatedCourses(page, courses);
  totalPages = newTotalPages;

  if (append) {
    renderGalleryCards(coursesOnPage, true);
  } else {
    renderGalleryCards(coursesOnPage, false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const showMoreButton = document.getElementById('showMoreButton');
  if (showMoreButton) {
    showMoreButton.style.display = currentPage >= totalPages ? 'none' : 'block';
  }

  updatePagination(currentPage, totalPages, loadCourses);
}

function handleSearch(query: string) {
  filteredCourses = query
    ? courses.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase()),
      )
    : courses;

  if (!filteredCourses.length) {
    document.getElementById('pagination')?.classList.add('disabled');
    document.getElementById('galleryCards')!.innerHTML = NotFound();
  } else {
    loadCourses(1, false, filteredCourses);
  }
}

export function handleCategoryChange(selectedCategory: string) {
  if (selectedCategory === 'select category') {
    filteredCourses = [...courses];
  } else {
    filteredCourses = [...courses].filter((course) => course.category.toLocaleLowerCase() === selectedCategory);
  }
  loadCourses(1, false, filteredCourses);
}

export function handleSortChange(field: SortByType) {
  filteredCourses = sortBy(filteredCourses, field);
  loadCourses(1, false, filteredCourses);
}
