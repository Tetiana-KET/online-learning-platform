import { createCourseItems } from '@controllers/createCourseItems';

export function CourseFilter() {
  const options = createCourseItems('option');

  const actionsSelectWrap = document.createElement('div');
  const actionsSelect = document.createElement('select');
  actionsSelect.id = 'actionsSelect';

  const defaultOption = document.createElement('option');
  defaultOption.classList.add('courses-category__item');
  defaultOption.id = 'defaultOption';
  defaultOption.textContent = 'Select Category';
  actionsSelect.append(defaultOption);

  actionsSelectWrap.classList.add('actions__select-wrap');
  actionsSelectWrap.append(actionsSelect);
  actionsSelect.append(...options);

  actionsSelect.addEventListener('click', () => {
    actionsSelectWrap.classList.toggle('open');
  });

  return actionsSelectWrap;
}
