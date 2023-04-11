import axios, {AxiosRequestConfig} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {IApiInfo} from '../types/constantFilesTypes';
import {getBaseUrl} from '../constants/environment';

const getAxiosObj = (
  apiInfo: IApiInfo,
  data: object | null,
  isRefreshToken: boolean | undefined,
  userDetail: object | null,
) => {
  const {access_token} = userDetail?.token ?? {};
  let contType = 'application/json;charset=utf-8';
  let obj = {};
  if (apiInfo.contType) {
    contType = apiInfo.contType;
  }
  const objget = {
    method: apiInfo.type,
    baseURL: getBaseUrl(),
    url: apiInfo.name,
    timeout: 30000,
    headers: {
      'Content-Type': contType,
    },
  };
  if (apiInfo.type !== 'get') {
    obj = {...objget, data};
  } else {
    obj = {...objget};
  }
  if (access_token) {
    obj.headers.Authorization = 'Bearer ' + access_token;
  }
  return obj;
};

export const apiCall = async (
  apiInfo: IApiInfo,
  data: object | null,
  params: object | null,
  userInfo: object | null,
  isRefreshToken?: boolean | undefined,
) => {
  return new Promise(async (resolve, reject) => {
    const axiosObj: AxiosRequestConfig<any> = getAxiosObj(
      apiInfo,
      data,
      isRefreshToken,
      userInfo,
    );
    if (params) {
      const queryStringArr = [];
      for (let key of Object.keys(params)) {
        queryStringArr.push(key + '=' + params[key]);
      }
      axiosObj.url = `${axiosObj.url}?${queryStringArr.join('&')}`;
    }
    const {isConnected} = await NetInfo.fetch();
    if (isConnected) {
      axios(axiosObj)
        .then(res => resolve(res))
        .catch(error => reject(error));
    } else {
      // No internet connection
    }
  });
};
