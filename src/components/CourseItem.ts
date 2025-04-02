import { replaceSpaceWithDash } from '@utils/replaceSpaceWithDash';

export function CourseItem(name: string, tag: string, isLink: boolean, value?: string) {
  const courseItem = document.createElement(tag);
  courseItem.classList.add('courses-category__item');

  if (value) {
    courseItem.setAttribute('value', value.toLocaleLowerCase());
  }

  if (isLink) {
    const link = document.createElement('a');
    link.href = `/gallery/${replaceSpaceWithDash(name)}`;
    link.setAttribute('data-link', '');
    link.text = `${name}`;
    courseItem.append(link);
  } else {
    courseItem.textContent = `${name}`;
  }

  return courseItem;
}
