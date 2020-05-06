import React from 'react';
import AppBar from '../../components/AppBar/Appbar';
import { accountRoutes , userRoutes} from '../../routes';
import AppContent from './AppContent'
import 'antd/dist/antd.css';

class Home extends React.Component {
  state = {
    routes: [],
    isLoggedIn: false,
    visibility: true,
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

 componentDidMount() {
    const userId = JSON.parse(localStorage.getItem('userId'));
    let isLoggedIn;
    let routes;
    if(userId !== null){
      isLoggedIn = true;
      routes = userRoutes;
    }else {
      isLoggedIn= false;
      routes=accountRoutes;
    }
    this.setState({ routes, isLoggedIn})
  }

  onLogout = status => {
    this.setState({
      isLoggedIn: status,
      routes: accountRoutes,
      visibility: true,
    });
    localStorage.clear();
  };

  setVisibility = visibility => {
    this.setState({ visibility });
  };

  render() {
    const {  routes, isLoggedIn, visibility } = this.state;
    return (
      <div>
        <AppBar
          routes={routes}
          handleSearch={this.handleSearch}
          isLoggedIn={isLoggedIn}
          onLogout={this.onLogout}
          visibility={visibility}
        />
        <AppContent  
        routes={routes}
        visibility={visibility}
        setVisibility={this.setVisibility}
        onLogout={this.onLogout}
        searchText='*'/> 
      </div>
    );
  }
}

export default Home;
