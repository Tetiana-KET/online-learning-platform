import { SliderCard } from '@components/SliderCard';
import { SLIDER_LENGTH } from '@consts/SLIDER_LENGTH';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { getRandomCourses } from '../utils/getRandomCourses';

export function renderSliderCard() {
  const sliderItems = document.getElementById('sliderTrack');

  const courses: Course[] = coursesRaw as Course[];
  const slideCourses = getRandomCourses(courses, SLIDER_LENGTH);
  slideCourses.forEach((course) => {
    const slide = SliderCard(course);
    sliderItems?.append(slide);
  });
}
