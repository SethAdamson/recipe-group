import React, { Component } from 'react';
import { HashRouter, withRouter } from 'react-router-dom';
import routes from './routes';
import Menu from './components/fixed/Menu';
import Header from './components/fixed/Header';
import LogReg from './components/user/LogReg'
import './App.css';

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <div className="App">
        <Header />
        <Menu />
        {routes}
        <LogReg />
      </div>
      // </HashRouter>
    );
  }
}

export default App;
