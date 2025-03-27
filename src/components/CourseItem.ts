export function CourseItem(name: string) {
  const courseItem = document.createElement('li');
  courseItem.classList.add('courses__item');
  courseItem.textContent = `${name}`;
  return courseItem;
}
