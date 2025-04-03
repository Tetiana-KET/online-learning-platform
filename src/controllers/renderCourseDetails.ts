import { CourseDetails } from '@components/CourseDetails';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { scrollToTop } from '@utils/scrollToTop';

export function renderCourseDetails(coursePath: string) {
  appendNodeToRoot(CourseDetails(coursePath));
  scrollToTop();
}
