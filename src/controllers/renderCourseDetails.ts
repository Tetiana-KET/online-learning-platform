import { CourseDetails } from '@components/CourseDetails';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { scrollToTop } from '@utils/scrollToTop';

export async function renderCourseDetails(coursePath: string) {
  document.body.classList.add('loading');
  await new Promise((resolve) => setTimeout(resolve, 300)).then(() => document.body.classList.remove('loading'));
  appendNodeToRoot(CourseDetails(coursePath));
  scrollToTop();
}
