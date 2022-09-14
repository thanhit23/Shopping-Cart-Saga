import { OPEN_MENU, CLOSE_MENU } from './constants';
/**
 * Changes the input field of the form
 */
export function openMenu() {
  return {
    type: OPEN_MENU,
  };
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  };
}
