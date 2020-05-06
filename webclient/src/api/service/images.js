import { postRequest, putRequest, deleteRequest, getRequest } from '../client/client';

import headers from '../../constans/header.json';
import { parseResult } from './dataParser';

export const createImage = async data => {
  const url = `${'http://localhost:3008/uploads'}`;
  const config = headers.content_type.application_json;
  const result = await postRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
export const updateImage = async (ImageId, data) => {
  const url = `${'http://localhost:3008/uploads'}/${ImageId}`;
  const config = headers.content_type.application_json;
  const result = await putRequest(url, data, config);

  const parsedResult = parseResult(result);
  return parsedResult;
};
export const deleteImage = async id => {
  const url = `${'http://localhost:3008/uploads'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await deleteRequest(url, config);

  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchAllImages = async () => {
  const url = 'http://localhost:3008/uploads';
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchImageById = async id => {
  const url = `${'http://localhost:3008/uploads'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
