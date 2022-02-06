import axios from 'axios';
import {TGenerateOptions, IFormatResponse} from '@types';
import storage from '../../store';

const baseURL = 'https://api.github.com';
const instance = axios.create();
instance.defaults.baseURL = baseURL;
instance.defaults.timeout = 30000;

export const httpPost = (url: string, data?: any) => sendRequest({method: 'POST', url, data});
export const httpGet = (url: string, params?: any) => sendRequest({method: 'GET', url, params});
export const httpDel = (url: string, data?: any) => sendRequest({method: 'DELETE', url, data});
export const httpPut = (url: string, data?: any) => sendRequest({method: 'PUT', url, data});
export const httpPatch = (url: string, data?: any) => sendRequest({method: 'PATCH', url, data});

const formatResponse: (response?: any) => IFormatResponse = (response = {}) => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
});

const sendRequest = async ({method, url, data = undefined, params = undefined}: TGenerateOptions) => {
  const OPTIONS = generateOptions({method, url, data, params});

  try {
    const response = await instance(OPTIONS);

    return formatResponse(response);
  } catch (error: any) {
    if (error.response?.status === 408 || error.code === 'ECONNABORTED') {
      throw formatResponse({
        status: 408,
        statusText: 'Request timeout!!',
      });
    }
    // if (error.response.data?.error === 'Unauthenticated.') {
    //   storage.store.dispatch(changeToken(''));
    //   //   navigate('AuthNavigator');
    //   Alert.alert('', i18next.t('Session'));
    // }
    throw formatResponse(error.response);
  }
};

const generateOptions = ({method, url, data, params}: TGenerateOptions) => {
  // const global: any = storage?.store?.getState().global || null;
  // const token = global.token || '';
  // const defaultHeaders = {
  //   'Content-Type': 'application/json',
  //   'Accept-Language': 'ru',
  //   Accept: 'application/json',
  // };

  // const authHeaders = {
  //   Authorization: `Bearer ${token}`,
  // };

  return {
    method,
    url,
    data,
    params,
    // headers: {
    //   ...defaultHeaders,
    //   ...(token ? authHeaders : {}),
    // },
  };
};
