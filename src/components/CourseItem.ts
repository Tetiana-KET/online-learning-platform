export function CourseItem(name: string, tag: string, value?: string) {
  const courseItem = document.createElement(tag);
  courseItem.classList.add('courses-category__item');
  courseItem.textContent = `${name}`;
  if (value) {
    courseItem.setAttribute('value', value.toLocaleLowerCase());
  }
  return courseItem;
}
