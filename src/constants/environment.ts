export const enum ENVIRONMENT {
  DEV = 'dev',
  STAGE = 'stage',
  QA = 'qa',
  PROD = 'prod',
}

const BASE_URL_PREFIX = ''; // Add prefix url;
const BASE_URL_POSTFIX = ''; // Add postfex url;
let SELECTED_ENV = ENVIRONMENT.DEV;

export const GOOGLE_WEB_CLIENT_ID =
  '156005285142-7j8aisidbblur3p802dvjp1qqrcdc32r.apps.googleusercontent.com';
export const GOOGLE_IOS_CLIENT_ID =
  '156005285142-9bdbk9lfocisa9d9c32adb4r8rrhg7vf.apps.googleusercontent.com';
export const getBaseUrl = () => {
  // return `${BASE_URL_PREFIX}${SELECTED_ENV}${BASE_URL_POSTFIX}`;
  return 'https://dummyjson.com/';
};
