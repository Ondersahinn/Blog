import { postRequest, putRequest, deleteRequest, getRequest } from '../client/client';

import headers from '../../constans/header.json';
import { parseResult } from './dataParser';

export const createComment = async data => {
  const url = `${'http://localhost:5000/routes/api/v1/comment'}`;
  const config = headers.content_type.application_json;
  const result = await postRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
export const updateComment = async (commentId, data) => {
  const url = `${'http://localhost:5000/routes/api/v1/comment'}/${commentId}`;
  const config = headers.content_type.application_json;
  const result = await putRequest(url, data, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const deleteComment = async id => {
  const url = `${'http://localhost:5000/routes/api/v1/comment'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await deleteRequest(url, config);

  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchAllComments = async () => {
  const url = 'http://localhost:5000/routes/api/v1/comment';
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};

export const searchCommentById = async id => {
  const url = `${'http://localhost:5000/routes/api/v1/comment'}/${id}`;
  const config = headers.content_type.application_json;
  const result = await getRequest(url, config);
  const parsedResult = parseResult(result);
  return parsedResult;
};
