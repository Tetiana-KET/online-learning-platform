import coursesRaw from '@data/courses.json';
import mentorsRaw from '@data/mentorsInfo.json';
import { Course } from '@models/Course';
import { GalleryCard } from './GalleryCard';
import { NotFound } from '@pages/NotFound';
import { CourseDetailsInfo } from './CourseDetailsInfo';
import { MentorInfoInterface } from '@models/MentorInfoInterface';
import { MentorCard } from './MentorCard';

export function CourseDetails(coursePath: string) {
  const id = parseInt(coursePath.split('_')[1]);
  const course: Course | undefined = (coursesRaw as Course[]).find((course) => course.id === id);
  const detailsSection = document.createElement('section');
  const detailsContent = document.createElement('div');
  detailsContent.classList.add('page-wrap', 'details');
  detailsSection.classList.add('details__container');

  const mentors = (mentorsRaw as MentorInfoInterface[]).filter((mentor) => course?.instructors.includes(mentor.name));
  const mentorsSection = document.createElement('section');
  const title = document.createElement('h2');
  title.innerHTML = 'Course <span>Mentors</span>';
  mentorsSection.append(title);

  const mentorsContainer = document.createElement('div');

  mentorsSection.classList.add('mentors');
  mentorsContainer.classList.add('mentors__container');

  mentorsSection.append(mentorsContainer);
  mentors.forEach((mentor) => {
    mentorsContainer.append(MentorCard(mentor));
  });

  if (course) {
    detailsSection.append(GalleryCard(course, true));
    detailsContent.append(detailsSection, CourseDetailsInfo((course as Course).addInfo), mentorsSection);
  } else {
    detailsContent.append(NotFound());
  }

  return detailsContent;
}
