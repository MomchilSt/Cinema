import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_ryXFIsuw8';
const appSecret = '14b24eb6f4644e779632088dbd98e7ef';
const dbCollections = ['movies', 'cinemas'];

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache'
};

const config = {
  baseURL: baseUrl,
  headers: {
    'Cache-Control': 'no-cache'
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
};

const http = axios.create(config);

const authInterceptor = function(config) {
  if (
    (config.url === 'login' || config.url === '') &&
    config.method === 'post'
  ) {
    config.baseURL = `${baseUrl}/user/${appKey}`;
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`)
    };
  } else {
    const token = localStorage.getItem('authtoken');

    config.baseURL = dbCollections.some(c => config.url.includes(c))
      ? `${baseUrl}/appdata/${appKey}`
      : `${baseUrl}/user/${appKey}`;
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      Authorization: 'Kinvey ' + token
    };
  }
  return config;
};

const loggerInterceptor = config => {
  return config;
};

http.interceptors.request.use(authInterceptor);
http.interceptors.request.use(loggerInterceptor);

const errorInterceptor = function(error) {
  if (error.response.status === 401) {
    this.$toast.error(`${error.response.status}: ${error.response.statusText} Please try again.`);
  } else if (error.response.status === 500) {
    this.$toast.error(`Server Error`);
  } else if (error.response.status === 409) {
    this.$toast.error(`${error.response.statusText} - Username is already used!`);
  } else {
    this.$toast.error(`${error.response.statusText}`);
  }

  return Promise.reject(error);
};

const responseInterceptor = function(response) {
  return response;
};

http.interceptors.response.use(responseInterceptor, errorInterceptor);

export { http };