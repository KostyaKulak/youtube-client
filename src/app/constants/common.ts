const MIN_PASSWORD_LENGTH: number = 16;
const MIN_LOGIN_LENGTH: number = 5;
const HOME_PAGE: string = 'list';
const LOGIN_PAGE: string = 'login';
const LOGOUT_PAGE: string = 'logout';
const USER_HOLDER: string = 'user';
const EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  HOME_PAGE,
  LOGIN_PAGE,
  USER_HOLDER,
  EMAIL_PATTERN,
  LOGOUT_PAGE
};
