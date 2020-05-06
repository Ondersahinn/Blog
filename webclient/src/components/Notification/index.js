import React from 'react';
import {  notification } from 'antd';
import {RadiusBottomrightOutlined } from '@ant-design/icons';
  
const openNotificationWithIcon = (type, status, res) => {
  notification.open({
      message: status,
      description: res,
    });
    notification.config({
      placement: 'bottomRight',
      bottom: 50,
      duration: 3,
    });
    return <RadiusBottomrightOutlined />;
  };


const Notification = props => {
    const {open ,status, message } = props; 
      
    return(
        <div>
           {open ?  openNotificationWithIcon(status,status,message): ''}
       
      </div>
    )

}
export default Notification;