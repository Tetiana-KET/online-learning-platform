import { createCourseItems } from './createCourseItems';

export function renderCourseItems() {
  const courseItemsWrap = document.getElementById('courses');
  const courseItems = createCourseItems('li', true);

  courseItemsWrap?.append(...courseItems);
}
