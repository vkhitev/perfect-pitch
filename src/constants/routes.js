import qs from 'qs';

export const createUrl = (path, params = {}, query = {}) => {
  const builtPath = Object.keys(params).reduce(
    (acc, param) => acc.replace(`:${param}`, params[param]),
    path,
  );
  return `${builtPath}?${qs.stringify(query)}`;
};

export const HOME = '/';
export const SIGNUP = '/signup';
export const LOGIN = '/login';
export const RESTORE_PASSWORD = '/restore-password';

export const SKILL = '/skill/:categoryId';
export const EXERCISE = '/skill/:categoryId/:exerciseId';

export const SETTINGS = {
  INDEX: '/settings',
  ACCOUNT: '/settings/account',
  PROFILE: '/settings/profile',
  PASSWORD: '/settings/password',
  NOTIFICATIONS: '/settings/notifications',
};
