import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './Work.sass';
import { MdHome } from 'react-icons/md';
import rsp from '../../../assets/images/rsp.png';
import KiioLabs from '../../../assets/images/KiioLabs.png';
import skypoint from '../../../assets/images/skypoint.png';

export default class Work extends Component {
  state = {}
  render () {
    return (
      <Col className='mt-5' lg='10' md='10' sm='10' xs={{ size: 10, offset: 1 }}>
        <a href='/' className='home-button'><span><MdHome size='2em'/></span></a>
        <h1 className='mb-5'>Portfolio</h1>
        <div className='mb-5'>
          <ul className='portfolio-list'>
            <li>
              <a href='https://www.rennsportperformance.com/' rel='noopener noreferrer' target='_blank'>
                <img src={ rsp } alt='' />
                <div className='text'>
                  <h3>RennSport Performance</h3>
                  <span>
                    Visit Website
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href='http://kiiolabs.s3-website.us-east-2.amazonaws.com/' rel='noopener noreferrer' target='_blank'>
                <img src={ KiioLabs } alt='' />
                <div className='text'>
                  <h3>Kiio Labs</h3>
                  <span>
                    Visit Website
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href='https://www.skypointballoons.com' rel='noopener noreferrer' target='_blank'>
                <img src={ skypoint } alt='' />
                <div className='text'>
                  <h3>SkyPoint Ballons</h3>
                  <span>
                    Visit Website
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Col>
    );
  }
}