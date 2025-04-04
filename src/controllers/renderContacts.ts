import { Contacts } from '@pages/Contacts';
import { appendNodeToRoot } from '@utils/appendNodeToRoot';

export function renderContacts() {
  appendNodeToRoot(Contacts());
}
