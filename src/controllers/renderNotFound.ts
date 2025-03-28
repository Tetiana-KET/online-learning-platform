import { NotFound } from '@pages/NotFound';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';

export function renderNotFound() {
  appendNodeToRoot(NotFound());
}
