import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, message,Checkbox } from 'antd';
import { layout, tailLayout } from '../../constans/Login'
import { searchUserLogin } from '../../api/service/userService';


const bcrypt = require('bcryptjs');

message.config({
    top: '1vh',
    left:150,
    duration: 2,
    maxCount: 3,
    rtl: true,
  });

const LoginForm = (props) => {
    async function onFinish(values) {
        const response = await searchUserLogin(values.email);
        if (response.data) {
            if (bcrypt.compareSync(values.password, response.data.password)) {
                localStorage.setItem('userId', JSON.stringify(response.data._id))
                props.history.push('/userPanel');
                window.location.reload(false)
            } else
                message.error('Hatalı şifre girişi');
        } else if (response.data === undefined) {
            message.error('Hatalı email girişi')
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);

    };

    return (
        <div style={{ border: '1px solid grey', width: '80%', height: '100%', backgroundColor: '#EAEDED', padding: '10px 10px 0 20px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>

            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        Submit
          </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default withRouter(LoginForm);