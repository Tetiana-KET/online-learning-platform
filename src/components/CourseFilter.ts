import { createCourseItems } from '@controllers/createCourseItems';
import { handleCategoryChange } from '@controllers/renderGallery';
import { toggleSelectOpen } from '@controllers/toggleSelectOpen';

export function CourseFilter() {
  const options = createCourseItems('option', false);

  const actionsSelectWrap = document.createElement('div');
  actionsSelectWrap.id = 'actionsSelectWrap';
  const actionsSelect = document.createElement('select');
  actionsSelect.id = 'actionsSelect';

  actionsSelectWrap.classList.add('actions__select-wrap');
  actionsSelectWrap.append(actionsSelect);
  actionsSelect.append(...options);

  options.find((option) => (option as HTMLOptionElement).value === 'select category')?.setAttribute('selected', '');

  actionsSelect.addEventListener('change', (e) => {
    const selectedCategory = (e.target as HTMLSelectElement).value;
    handleCategoryChange(selectedCategory);
    const newUrl = `/gallery/${selectedCategory.replace(/\s+/g, '-')}`;
    history.pushState({ route: newUrl }, '', newUrl);
  });

  toggleSelectOpen(actionsSelect);
  return actionsSelectWrap;
}
