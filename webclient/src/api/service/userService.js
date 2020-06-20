import { postRequest, putRequest, deleteRequest, getRequest } from '../client/client';

import headers from '../../constans/header.json';
import { parseResult } from './dataParser';

export const createUser = async data => {
  const url = `${'http://localhost:5001/routes/api/v1/user'}`;
  const config = headers.content_type.application_json;
  const result = await postRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
export const updateUser = async (userId, data) => {
  const url = `${'http://localhost:5001/routes/api/v1/user'}/${userId}`;
  const config = headers.content_type.application_json;
  const result = await putRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const deleteUser = async id => {
  const url = `${'http://localhost:5001/routes/api/v1/user'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await deleteRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchAllUsers = async () => {
  const url = 'http://localhost:5001/routes/api/v1/user';
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchUserById = async id => {
  const url = `${'http://localhost:5001/routes/api/v1/user'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchUserLogin = async email => {
  const url = 'http://localhost:5001/routes/api/v1/user/login';
  const config = headers.content_type.application_json;
  const result = await postRequest(url, {email} ,config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
