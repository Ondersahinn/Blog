import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import { SettingOutlined, } from '@ant-design/icons';

const { SubMenu } = Menu;
const logo = require('../../images/logo.png')

class AppBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  onLogOut = () => {
    localStorage.removeItem('userId');
    this.props.onLogout(false);
  };

  renderLoginRoutes = () => {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <Menu.Item key="Login" style={{left:'65vw'}}>
          <Link to='/login' >
            <Button type="primary">Login</Button>
          </Link>
        </Menu.Item>
      );
    } else {
      return (<Menu.Item key="Login"  style={{left:'65vw'}}>
        <Link to='/'>
          <Button type="primary" onClick={this.onLogOut} >Logout</Button>
        </Link>
      </Menu.Item>);
    }
  }

  render() {
    return (
      <Menu style={{ justifyContent: 'rigth ' }} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      
      
        <Menu.Item key="mail">
          <Link to='/'>
          <img width="70px" height="55px" alt="logo" src={logo} />
            
          </Link>
        </Menu.Item>
       

        {this.renderLoginRoutes()}
        <Menu.Item key="Sign Up" style={{left:'65vw'}}>
          <Link to='/signup'>
            <Button type="primary">Sign Up</Button>
          </Link>

        </Menu.Item>

      </Menu>
    );
  }
}

export default withRouter(AppBar);
