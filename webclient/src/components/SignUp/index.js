import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Select,message, Button } from 'antd';
import { layout, validateMessages } from '../../constans/SginUp'
import { createUser } from '../../api/service/userService'
const bcrypt = require('bcryptjs');

const { Option } = Select;

const SignUp = props => {
    const [form] = Form.useForm();

    const onGenderChange = value => {
        switch (value) {
            case "male":
                form.setFieldsValue();

                return;
            case "female":
                form.setFieldsValue();

                return;
            case "other":
                form.setFieldsValue();

                return;
        }
    };

    async function onFinish({ user }) {
        const password = bcrypt.hashSync(user.password, 10);
        user.password = password;
        const result = await createUser(user)
        if (!result.errStatus) {
            message.success('Kayıt Başarılı')
            setTimeout(() => {
                props.history.push('/login');
            }, 1000);
            
        }else{
            message.error(result.message)
        }
    };



    const handleClick = async () => {

        form.resetFields();
    }

    return (
        <div style={{ border: '1px solid grey', width: '80%', height: '100%', backgroundColor: '#EAEDED', padding: '10px 10px 0 20px', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%' }}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'surname']} label="Surname" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name={['user', 'password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item name={['user', 'gender']} label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">Erkek</Option>
                        <Option value="female">Kadın</Option>
                        <Option value="other">Diğer</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) => {
                        return getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" onClick={handleClick}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default withRouter(SignUp);
