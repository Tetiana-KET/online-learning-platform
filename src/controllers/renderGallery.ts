import { Gallery } from '@pages/Gallery';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';

export function renderGallery() {
  appendNodeToRoot(Gallery());
}
