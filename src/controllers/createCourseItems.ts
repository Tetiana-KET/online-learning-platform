import { CourseItem } from '@components/CourseItem';
import { CATEGORIES } from '@consts/CATEGORIES';

export function createCourseItems(tag: string) {
  const courseItems: HTMLElement[] = [];
  [...CATEGORIES].sort().forEach((category) => {
    const courseItem = CourseItem(category, tag, category);
    courseItems.push(courseItem);
  });
  return courseItems;
}
