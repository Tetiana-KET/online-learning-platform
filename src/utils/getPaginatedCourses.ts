import { PER_PAGE } from '@consts/PER_PAGE';
import { Course } from '@models/Course';

export function getPaginatedCourses(currentPage: number, courses: Course[]) {
  const totalCourses = courses.length;
  const totalPages = Math.ceil(totalCourses / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  return {
    coursesOnPage: courses.slice(startIndex, endIndex),
    totalPages,
  };
}
