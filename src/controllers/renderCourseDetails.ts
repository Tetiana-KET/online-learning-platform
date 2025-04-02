import { CourseDetails } from '@components/CourseDetails';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';

export function renderCourseDetails(coursePath: string) {
  appendNodeToRoot(CourseDetails(coursePath));
}
