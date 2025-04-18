import { createCourseItems } from '@controllers/createCourseItems';
import { Router } from '@controllers/Router';
import { toggleSelectOpen } from '@controllers/toggleSelectOpen';
import { replaceSpaceWithDash } from '@utils/replaceSpaceWithDash';

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
    Router.galleryController?.handleCategoryChange(selectedCategory);
    const newUrl = `/gallery/${replaceSpaceWithDash(selectedCategory)}`;
    history.pushState({ route: newUrl }, '', newUrl);
  });

  toggleSelectOpen(actionsSelect);
  return actionsSelectWrap;
}
