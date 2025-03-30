import { PER_PAGE } from '@consts/PER_PAGE';
import { Course } from '@models/Course';

export function getPaginatedCourses(currentPage: number, courses: Course[]) {
  const totalCourses = courses.length;
  const sortedCourse = [...courses].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  const totalPages = Math.ceil(totalCourses / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  return {
    coursesOnPage: sortedCourse.slice(startIndex, endIndex),
    totalPages,
  };
}
