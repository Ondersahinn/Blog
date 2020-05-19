import { format } from 'date-fns';
import {  message } from 'antd';

export const formatDate = date => {
    const formattedDate = format(date, 'MM/dd/yyyy');
    return formattedDate;
  };
  
export const commentFormatDate = date => {
  const formattedDate = format(date, 'DD-MM-YYYY HH:mm:ss');
  return formattedDate;
};

 export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }