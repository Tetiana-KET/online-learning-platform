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
import { scrollToTop } from '@utils/scrollToTop';

let currentPage = 1;
let totalPages = 1;
const courses: Course[] = coursesRaw as Course[];
const sortedCourses: Course[] = sortBy([...courses]);
let filteredCourses: Course[] = [...sortedCourses];

export function renderGallery() {
  appendNodeToRoot(Gallery(currentPage, totalPages, loadCourses, handleSearch));

  const path = window.location.pathname;
  const category = path.split('/')[2]?.replace(/-/g, ' ') || 'select category';
  const filter = document.getElementById('actionsSelect');
  if (filter) {
    (filter as HTMLSelectElement).value = category;
  }
  handleCategoryChange(category);
}

export async function loadCourses(page: number = 1, append: boolean, courses: Course[] = filteredCourses) {
  currentPage = page;

  document.body.classList.add('loading');

  await new Promise((resolve) => setTimeout(resolve, 300)).then(() => document.body.classList.remove('loading'));

  const { coursesOnPage, totalPages: newTotalPages } = getPaginatedCourses(page, courses);
  totalPages = newTotalPages;

  if (append) {
    renderGalleryCards(coursesOnPage, true);
  } else {
    renderGalleryCards(coursesOnPage, false);
    scrollToTop();
  }

  const showMoreButton = document.getElementById('showMoreButton');
  if (showMoreButton) {
    showMoreButton.style.display = currentPage >= totalPages ? 'none' : 'block';
  }

  if (coursesOnPage.length) {
    updatePagination(currentPage, totalPages, loadCourses);
  }
}

function handleSearch(query: string) {
  const actionsSelectWrap = document.getElementById('actionsSelectWrap');
  const sortWrap = document.getElementById('sortWrap');
  const showMoreButton = document.getElementById('showMoreButton');

  filteredCourses = query
    ? courses.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase()),
      )
    : courses;

  if (!filteredCourses.length) {
    document.getElementById('pagination')?.classList.add('disabled');
    document.getElementById('galleryCards')!.innerHTML = NotFound();
    actionsSelectWrap?.classList.add('disabled');
    sortWrap?.classList.add('disabled');
    if (showMoreButton) {
      showMoreButton.style.display = 'none';
    }
  } else {
    actionsSelectWrap?.classList.remove('disabled');
    sortWrap?.classList.remove('disabled');
    loadCourses(1, false, filteredCourses);
    if (showMoreButton) {
      showMoreButton.style.display = 'block';
    }
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
