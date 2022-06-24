import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './Work.css';
import { MdHome } from 'react-icons/md';
import rsp from '../../../assets/images/rsp.png';
import rfw from '../../../assets/images/rfw.png';
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
            Updates underway <span role='img' aria-label='emoji'>🚧🚧🚧🚧🚧</span>
            <li>
              <a href='https://rapefreeworld.com/' rel='noopener noreferrer' target='_blank'>
                <img src={ rfw } alt='' />
                <div className='text'>
                  <h3>Rape Free World</h3>
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
          </ul>
        </div>
      </Col>
    );
  }
}