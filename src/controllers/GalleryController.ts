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

export class GalleryController {
  private currentPage: number = 1;
  private totalPages: number = 1;
  private courses: Course[] = coursesRaw as Course[];
  private sortedCourses: Course[] = sortBy([...this.courses]);
  private filteredCourses: Course[] = [...this.sortedCourses];

  constructor() {
    this.init();
  }

  private init() {
    appendNodeToRoot(
      Gallery(this.currentPage, this.totalPages, this.loadCourses.bind(this), this.handleSearch.bind(this)),
    );

    const path = window.location.pathname;
    const category = path.split('/')[2]?.replace(/-/g, ' ') || 'select category';
    const filter = document.getElementById('actionsSelect');

    if (filter) {
      (filter as HTMLSelectElement).value = category;
    }
    this.handleCategoryChange(category);
  }

  public async loadCourses(page: number = 1, append: boolean, courses: Course[] = this.filteredCourses) {
    this.currentPage = page;

    document.body.classList.add('loading');

    await new Promise((resolve) => setTimeout(resolve, 300)).then(() => document.body.classList.remove('loading'));

    const { coursesOnPage, totalPages: newTotalPages } = getPaginatedCourses(page, courses);
    this.totalPages = newTotalPages;

    if (append) {
      renderGalleryCards(coursesOnPage, true);
    } else {
      renderGalleryCards(coursesOnPage, false);
      scrollToTop();
    }

    const showMoreButton = document.getElementById('showMoreButton');
    if (showMoreButton) {
      showMoreButton.style.display = this.currentPage >= this.totalPages ? 'none' : 'block';
    }

    if (coursesOnPage.length) {
      updatePagination(this.currentPage, this.totalPages, this.loadCourses.bind(this));
    }
  }

  private handleSearch(query: string) {
    const actionsSelectWrap = document.getElementById('actionsSelectWrap');
    const sortWrap = document.getElementById('sortWrap');
    const showMoreButton = document.getElementById('showMoreButton');

    this.filteredCourses = query
      ? this.courses.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(query.toLowerCase()) ||
            description.toLowerCase().includes(query.toLowerCase()),
        )
      : this.courses;

    if (!this.filteredCourses.length) {
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
      this.loadCourses(1, false, this.filteredCourses);
      if (showMoreButton) {
        showMoreButton.style.display = 'block';
      }
    }
  }

  public handleCategoryChange(selectedCategory: string) {
    if (selectedCategory === 'select category') {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = [...this.courses].filter(
        (course) => course.category.toLocaleLowerCase() === selectedCategory,
      );
    }
    this.loadCourses(1, false, this.filteredCourses);
  }

  public handleSortChange(field: SortByType) {
    this.filteredCourses = sortBy(this.filteredCourses, field);
    this.loadCourses(1, false, this.filteredCourses);
  }

  public destroy() {
    document.getElementById('appContent')!.innerHTML = '';
    this.currentPage = 1;
    this.totalPages = 1;
    this.filteredCourses = [...this.courses];
  }
}
