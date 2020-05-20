import React from 'react';
import ImageUpload from './imageUpload';
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import { Alert } from 'antd';

const UserForm = props => {

    const onFinish = values => {
        props.createDate(values)
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };


    return (
        <div >

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <h1>{props.userInfo.name} {props.userInfo.surname} </h1>
                    <ImageUpload imageUrl={props.userInfo.profileImage !== undefined ? props.userInfo.profileImage : ''} />
                </Col>
                <Col className="gutter-row" span={10}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} >
                        <Alert style={{ marginLeft: '13vh' }} message="Sosyal Medya Linkleri" />
                        <br />
                        <Form.Item name={['user', 'facebook']} label="Facebook" rules={[{}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'instagram']} label="Instagram" rules={[{}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'twitter']} label="Twitter" rules={[{}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'linkedin']} label="Linkedin" rules={[{}]}>
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                     </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    );

}

export default UserForm;