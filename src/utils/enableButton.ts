import { SLIDER_TRANSITION } from '@consts/SLIDER_TRANSITION';

export function enableButton(button: HTMLElement) {
  setTimeout(() => {
    button.classList.remove('arrow_disabled');
  }, SLIDER_TRANSITION);
}
