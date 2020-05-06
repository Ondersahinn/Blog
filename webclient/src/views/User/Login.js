import React from 'react';
import LoginForm from './LoginForm';
import { Row, Col } from 'antd';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
        };
    }


    render() {
        if (this.state.loggedIn === false) {
            return this.props.history.push('/');
        }
        return (
            <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={16}>
                    <LoginForm />
                </Col>

            </Row>
        );
    }
}

export default Login;
