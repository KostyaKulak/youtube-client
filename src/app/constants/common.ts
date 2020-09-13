const MIN_PASSWORD_LENGTH: number = 16;
const MIN_LOGIN_LENGTH: number = 5;
const MIN_TITLE_LENGTH: number = 5;
const MIN_DESCRIPTION_LENGTH: number = 10;
const HOME_PAGE: string = 'list';
const ADMIN_PAGE: string = 'admin';
const LOGIN_PAGE: string = 'login';
const LOGOUT_PAGE: string = 'logout';
const USER_HOLDER: string = 'user';
const EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_PATTERN: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const DATE_PATTERN: RegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

export {
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  HOME_PAGE,
  LOGIN_PAGE,
  USER_HOLDER,
  EMAIL_PATTERN,
  LOGOUT_PAGE,
  URL_PATTERN,
  MIN_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  DATE_PATTERN,
  ADMIN_PAGE
};
