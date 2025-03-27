import { CourseItem } from '@components/CourseItem';
import { CATEGORIES } from '@consts/CATEGORIES';

export function renderCourseItems() {
  const courseItems = document.getElementById('courses');

  [...CATEGORIES].sort().forEach((category) => {
    const courseItem = CourseItem(category);
    courseItems?.append(courseItem);
  });
}
