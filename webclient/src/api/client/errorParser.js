export const errorParser = result => {
    return {
      message: result.message,
      status: 'error',
    };
  };
  