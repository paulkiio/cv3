import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './Resume.sass';
import CV from '../../../assets/Paul_Wathome_Resume.pdf';
import { MdHome } from 'react-icons/md';
import { MdFileDownload } from 'react-icons/md';

export default class Resume extends Component {
  state = {}
  render() {
    return (
      <Col className='mt-5' lg='10' md='10' sm='10' xs={{ size: 10, offset: 1 }}>
        <a href='/' className='home-button'><MdHome size='2em'/></a>
        <h1 className='mb-5'>Experience</h1>
        <div className='mb-5'>
          <ul className='resume-list'>
            <li>
              <h3>Implementation Engineer, SmarterHQ</h3>
              <p className='date'>Dec 2017 - Present</p>
              <p>
                &bull; Own the process of scoping the client’s website to
                understand the structure and availability of shopper
                behavioral data (e.g. browsing products/categories, carting
                and purchasing products).<br />
                &bull; Spearhead and drive meetings and
                calls with the client to discuss technical aspects of
                implementation.<br />
                &bull; Write performant Javascript programs that
                uses our API to collect shopper behavioral data on client
                websites.<br />
              </p>
            </li>
            <li>
              <h3>Developer / Technician, Kiio Labs</h3>
              <p className='date'>Nov 2005 - Current</p>
              <p>
                &bull; Webiste Design + Implementation
                <br />
                &bull; Consumer Electronics Repair
                <br />
                &bull; Operating System Re-install
                <br />
                &bull; Data Recovery
              </p>
            </li>
            <li>
              <h3>Software Developer, Pondurance</h3>
              <p className='date'>Aug 2017 - Oct 2017</p>
              <p>
                Enhanced in-house ticketing tool by adding numerous key
                features. Ruby on Rails, React, Javascript, Sass, Bootstrap
                are some of the technologies and libraries used.
              </p>
            </li>
            <li>
              <h3>Web Developer, Red Tettemer O'Connell</h3>
              <p className='date'>Mar 2017 - Jun 2017</p>
              <p>
                Configured AWS on a WordPress legacy site by integrating
                required plugins so that images would be stored in S3.
                Developed zoom capabilities supporting both desktop and
                mobile utilizing Ruby, jQuery, JavaScript, and SASS.
              </p>
            </li>
            <li>
              <h3>Project Based Learning, New York Code & Design</h3>
              <p className='date'>Nov 2016 - Feb 2017</p>
              <p>
                This 3-month intensive program introduced technologies such
                as JavaScript, jQuery SASS/CSS, HTML5, Ruby, Ruby on Rails,
                Sinatra, Activerecord and some test-driven development.
              </p>
            </li>
          </ul>
          <div className='text-center'>
            <a href={ CV } download><MdFileDownload size='2em'/>Download CV</a>
          </div>
        </div>
      </Col>
    );
  }
}