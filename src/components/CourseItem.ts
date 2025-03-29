export function CourseItem(name: string, tag: string) {
  const courseItem = document.createElement(tag);
  courseItem.classList.add('courses-category__item');
  courseItem.textContent = `${name}`;
  return courseItem;
}
