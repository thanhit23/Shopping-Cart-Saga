import { OPEN_MENU } from './constants';
import { CLOSE_MENU } from './constants';

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
