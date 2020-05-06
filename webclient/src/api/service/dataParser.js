const parseError = result => {
  return {
    message: result.message.name || result.message,
    status: result.status,
    color: 'danger',
    errStatus: true,
  };
};

const parseSuccess = result => {
  return {
    data: result.data,
    message: result.message,
    status: result.status,
    color: 'success',
    errStatus: false,
  };
};

export const parseResult = result => {
  if (result.status === 'error') {
    return parseError(result);
  }
  return parseSuccess(result);
};

export const parseCompileResult = result => {
  return { data: result };
};
