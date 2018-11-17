import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.sass'
import Nav from './components/Nav/Nav'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="outer-container">
            <Nav />
            <Row id="page-wrap">
              <Col id="main-content" lg="6" md="6" xs="12">
                <h1>Main Content Area</h1>
              </Col>

              <Col id="main-image" lg="6" md="6" xs="12">
                <img src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-09.jpg?resize=401%2C600&ssl=1" className="img-fluid" width="100%"/>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default App;
