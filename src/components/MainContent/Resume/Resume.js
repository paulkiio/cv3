import React, { Component } from 'react';
import { Col } from "reactstrap";
import './Resume.sass'

export default class Resume extends Component {
  state = {}
  render () {
    return (
      <Col className="mt-5" lg="10" md="10" sm="10" xs={{ size: 10, offset: 1 }}>
      <a href="index.html" className="home-button"><span className="fa fa-home"></span></a>
        <h1 className="mb-5">Experience</h1>
        <div className="mb-5">
          <ul className="resume-list">
            <li>
              <h3>JavaScript Developer, SmarterHQ</h3>
              <p className="date">Dec 2017 - Present</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
            </li>
            <li>
              <h3>Software Developer, Pondurance</h3>
              <p className="date">Aug 2017 - Oct 2017</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
            </li>
            <li>
              <h3>Web Developer, Red Tettemer O'Connell</h3>
              <p className="date">Mar 2017 - Jun 2017</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
            </li>
            <li>
              <h3>Project Based Learning, New York Code & Design</h3>
              <p className="date">Nov 2016 - Feb 2017</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
            </li>
            <li>
              <h3>Developer / Technician, Kiio Labs</h3>
              <p className="date">Nov 2016 - Feb 2017</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
            </li>
          </ul>
        </div>
      </Col>
    );
  }
}