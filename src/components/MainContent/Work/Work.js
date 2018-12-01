import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import './Work.sass'

export default class Work extends Component {
  state = {}
  render () {
    let placeholder = "https://via.placeholder.com/450";
    return (
      <Col className="mt-5" lg="10" md="10" sm="10" xs={{ size: 10, offset: 1 }}>
        <a href="index.html" className="home-button"><span className="fa fa-home"></span></a>
        <h1 className="mb-5">Portfolio</h1>
        <div className="mb-5">
          <ul className="portfolio-list">
            <li>
              <a href="#">
                <img src={placeholder} alt="" />
                <div className="text">
                  <h3>Project Name</h3>
                  <span>Visit Website</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={placeholder} alt="" />
                <div className="text">
                  <h3>Project Name</h3>
                  <span>Visit Website</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={placeholder} alt="" />
                <div className="text">
                  <h3>Project Name</h3>
                  <span>Visit Website</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Col>
    );
  }
}