import axios from 'axios';
import comments from './comments.json';

export const BaseUrl = () => {
  // replace with server proxy
  return 'https://forum.superprism.io/';
};

export const get = async (endpoint) => {
  // const baseURL = BaseUrl();

  // const instance = axios.create({
  //   baseURL,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  try {
    // return await instance.get(`/${endpoint}`);
    return comments;
  } catch (err) {
    throw new Error(err);
  }
};

export const post = async (endpoint, payload) => {
  const baseURL = BaseUrl();

  const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });
  try {
    return await instance.post(`/${endpoint}`, payload);
  } catch (err) {
    return err.response;
  }
};
