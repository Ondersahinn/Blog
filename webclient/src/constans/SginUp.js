export const validateMessages = {
    //eslint-disable-next-line
    required: '${label} is required!',
    types: {
        //eslint-disable-next-line
      email: '${label} is not validate email!',
      validateEmail:false,
      //eslint-disable-next-line
      number: '${label} is not a validate number!',
    },
    number: {
        //eslint-disable-next-line
      range: '${label} must be between ${min} and ${max}',
    },
  };

export const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };