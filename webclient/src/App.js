import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from './views/Home/index';
import 'antd/dist/antd.css';

const hist = createBrowserHistory();

const App = () => (
  <div data-test="component-app">
    <Router history={hist}>
      <Home />
    </Router>
  </div>
);
export default App;
