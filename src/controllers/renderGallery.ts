import { Gallery } from '@pages/Gallery';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { renderGalleryCards } from './renderGalleryCards';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { getPaginatedCourses } from '@utils/getPaginatedCourses';
import { updatePagination } from '@utils/updatePagination';

let currentPage = 1;
let totalPages = 1;
const courses: Course[] = coursesRaw as Course[];
let filteredCourses: Course[] = [...courses];

export function loadCourses(page: number = 1, append: boolean, filteredCourses: Course[] = courses) {
  currentPage = page;
  const { coursesOnPage, totalPages: newTotalPages } = getPaginatedCourses(page, filteredCourses);
  totalPages = newTotalPages;

  if (append) {
    renderGalleryCards(coursesOnPage, true);
  } else {
    renderGallery(coursesOnPage, currentPage, totalPages);
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
    document.getElementById('galleryCards')!.innerHTML = `<div class="notFound">
    <p>Nothing Found!</p>
    <p>More user friendly UI will be here soon...!</p>
    </div>`;
  } else {
    loadCourses(1, false, filteredCourses);
  }
}

export function handleCategoryChange(selectedCategory: string) {
  let filteredCourses;
  console.log(selectedCategory);
  if (selectedCategory === 'select category') {
    filteredCourses = [...courses];
  } else {
    const options = document.querySelectorAll('#actionsSelect option');

    options.forEach((option) => {
      option.removeAttribute('selected');
    });

    Array.from(options)
      .find((option) => (option as HTMLOptionElement).value === selectedCategory)
      ?.setAttribute('selected', '');

    filteredCourses = [...courses].filter((course) => course.category.toLocaleLowerCase() === selectedCategory);
  }

  loadCourses(1, false, filteredCourses);
}

export function renderGallery(courses: Course[], currentPage: number, totalPages: number) {
  appendNodeToRoot(Gallery(currentPage, totalPages, loadCourses, handleSearch));
  renderGalleryCards(courses);
}
