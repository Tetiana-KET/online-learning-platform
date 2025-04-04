import { Contacts } from '@pages/Contacts';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';
import { renderBestMentorsSection } from './renderBestMentorsSection';

export function renderContacts() {
  appendNodeToRoot(Contacts());
  renderBestMentorsSection();
}
