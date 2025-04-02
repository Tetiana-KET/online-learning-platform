import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { GalleryCard } from './GalleryCard';
import { NotFound } from '@pages/NotFound';

export function CourseDetails(coursePath: string) {
  const id = parseInt(coursePath.split('_')[1]);
  const course: Course | undefined = (coursesRaw as Course[]).find((course) => course.id === id);
  const detailsSection = document.createElement('section');
  const detailsContent = document.createElement('div');

  detailsSection.classList.add('details');
  detailsContent.classList.add('details__container');
  if (course) {
    detailsContent.append(GalleryCard(course, true));
  } else {
    detailsContent.append(NotFound());
  }

  detailsSection.append(detailsContent);
  return detailsSection;
}
