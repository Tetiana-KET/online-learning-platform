import { createCourseItems } from '@controllers/createCourseItems';
import { handleCategoryChange } from '@controllers/renderGallery';

export function CourseFilter() {
  const options = createCourseItems('option');

  const actionsSelectWrap = document.createElement('div');
  const actionsSelect = document.createElement('select');
  actionsSelect.id = 'actionsSelect';
  actionsSelect.textContent = 'Select Category';

  actionsSelectWrap.classList.add('actions__select-wrap');
  actionsSelectWrap.append(actionsSelect);
  actionsSelect.append(...options);

  options.find((option) => (option as HTMLOptionElement).value === 'select category')?.setAttribute('selected', '');

  actionsSelect.addEventListener('click', () => {
    actionsSelectWrap.classList.toggle('open');
  });

  actionsSelect.addEventListener('change', (e) => {
    const selectedCategory = (e.target as HTMLSelectElement).value;
    handleCategoryChange(selectedCategory);
  });
  return actionsSelectWrap;
}
