import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import {  SettingOutlined,} from '@ant-design/icons';

const { SubMenu } = Menu;

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
        <Menu.Item key="Login">
          <Link to='/login'>
            <Button type="primary">Login</Button>
          </Link>
        </Menu.Item>
      );
    } else {
      return (<Menu.Item key="Login">
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
            Anasayfa
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to='/userPanel'>
            User Controller
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <SettingOutlined />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        {this.renderLoginRoutes()}
        <Menu.Item key="Sign Up">
          <Link to='/signup'>
            <Button type="primary">Sign Up</Button>
          </Link>

        </Menu.Item>

      </Menu>
    );
  }
}

export default withRouter(AppBar);
