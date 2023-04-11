import {API_URL} from '../constants/apiUrls';
import {apiCall} from './axiosHelper';

export const userLogin = (params: object) => {
  return apiCall(API_URL.LOGIN_ACCOUNT, null, null, null);
};
