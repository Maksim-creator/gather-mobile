import i18n from '../../i18n';

export const routes = [
  {
    key: 'active',
    title: i18n.t('ProfileScreen.activeTabText'),
    icon: 'time-outline',
  },
  {
    key: 'saved',
    title: i18n.t('ProfileScreen.savedTabText'),
    icon: 'bookmark-outline',
  },
  {
    key: 'finished',
    title: i18n.t('ProfileScreen.finishedTabText'),
    icon: 'flag-outline',
  },
];

export const renderGender = (gender?: string) => {
  switch (gender) {
    case 'Male':
      return i18n.t('ProfileScreen.he_gender_text');
    case 'Female':
      return i18n.t('ProfileScreen.she_gender_text');
    case 'Rather not to say':
      return '';
  }
};
