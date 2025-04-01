import { CourseItem } from '@components/CourseItem';
import { CATEGORIES } from '@consts/CATEGORIES';

export function createCourseItems(tag: string, isLink: boolean) {
  const courseItems: HTMLElement[] = [];
  [...CATEGORIES].sort().forEach((category) => {
    const courseItem = CourseItem(category, tag, isLink, category);
    courseItems.push(courseItem);
  });
  return courseItems;
}
