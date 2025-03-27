import { Course } from '@models/Course';
import { getRandomNum } from './getRandomNum';

export function getRandomCourses(courses: Course[], count: number) {
  const selectedIndexes = new Set<number>();
  while (selectedIndexes.size < count) {
    const randomIndex = getRandomNum(0, courses.length);
    selectedIndexes.add(randomIndex);
  }

  return [...selectedIndexes].map((index) => courses[index]);
}
