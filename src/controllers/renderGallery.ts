import { Gallery } from '@pages/Gallery';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { renderGalleryCards } from './renderGalleryCards';

export function renderGallery() {
  appendNodeToRoot(Gallery());
  renderGalleryCards();
}
