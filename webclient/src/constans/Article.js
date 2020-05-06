
export const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
export const validateMessages = {
    required: '${label} is required',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };