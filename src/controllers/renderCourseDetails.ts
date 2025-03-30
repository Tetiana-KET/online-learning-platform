import { CourseDetails } from '@components/CourseDetails';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';

export function renderCourseDetails(id: string) {
  appendNodeToRoot(CourseDetails(id));
}
