import { SliderCard } from '@components/SliderCard';
import { SLIDER_LENGTH } from '@consts/SLIDER_LENGTH';
import coursesRaw from '@data/courses.json';
import { Course } from '@models/Course';
import { getRandomItems } from '@utils/getRandomItems';

export function renderSliderCard() {
  const sliderItems = document.getElementById('sliderTrack');

  const courses: Course[] = coursesRaw as Course[];
  const slideCourses = getRandomItems(courses, SLIDER_LENGTH);
  slideCourses.forEach((course) => {
    const slide = SliderCard(course);
    sliderItems?.append(slide);
  });
  const firstItem = sliderItems?.firstChild as Element;

  if (firstItem) {
    firstItem.querySelector('img')?.setAttribute('loading', 'eager');
  }
}
