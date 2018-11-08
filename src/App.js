import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.sass'
import { push as Menu } from 'react-burger-menu'
import './Nav.sass'

class App extends Component {
  showSettings = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <main id="page-wrap">
          Main area
        </main>
      </div>
      </div>
    );
  }
}

export default App;
