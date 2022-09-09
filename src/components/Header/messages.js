import { defineMessages } from 'react-intl';

export const scope = 'container.Header';
export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },
  information: {
    id: `${scope}.account.information`,
    defaultMessage: 'Information',
  },
  logout: {
    id: `${scope}.account.logout`,
    defaultMessage: 'Log Out',
  },
  search: {
    id: `${scope}.navigation.search`,
    defaultMessage: 'Search',
  },
});
