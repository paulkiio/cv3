import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.sass'
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="outer-container">
          <Nav />
          <div id="page-wrap">
            <div id="main-content">
              main content area
            </div>
            <aside id="main-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
