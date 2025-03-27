import { SLIDER_LENGTH } from '@consts/SLIDER_LENGTH';
import { getRandomCourses } from './getRandomCourses';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { SliderCard } from '@components/SliderCard';

export function renderSliderCard() {
  const sliderItems = document.getElementById('slider-items');

  const courses: Course[] = coursesRaw as Course[];
  const slideCourses = getRandomCourses(courses, SLIDER_LENGTH);
  slideCourses.forEach((course) => {
    const slide = SliderCard(course);
    sliderItems?.append(slide);
  });
}
