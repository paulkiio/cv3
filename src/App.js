import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.sass';
import { Row } from "reactstrap";
import Nav from './components/Nav/Nav';
import MainImage from './components/MainImage/MainImage';
import MainContent from './components/MainContent/MainContent';


class App extends Component {
  render () {
    return (
      <div className="App">
        <div id="outer-container">
          <Nav />
          <Row id="page-wrap">
            <MainImage />
            <MainContent />
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
