import axios from 'axios';
import { errorParser } from './errorParser';

export const getRequest = (url, headers) =>
  axios
    .get(url, { config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const postRequest = (url, data, headers) =>
  axios
    .post(url, data, { config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const putRequest = (url, data, headers) =>
  axios
    .put(url, data, { config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));

export const deleteRequest = (url, headers) =>
  axios
    .delete(url, { config: headers })
    .then(res => res.data)
    .catch(err => errorParser(err));
