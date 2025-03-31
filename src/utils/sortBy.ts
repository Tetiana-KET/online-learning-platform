import { Course } from '@models/Course';
import { SortByType } from '@models/SortByType';

export function sortBy(courses: Course[], field: SortByType = 'title') {
  return [...courses].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.toLowerCase().localeCompare(bValue.toLowerCase());
    }

    return 0;
  });
}
