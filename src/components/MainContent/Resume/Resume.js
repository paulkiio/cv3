import React from "react"
import "./Resume.css"
import CV from "../../../assets/Paul_Wathome_Resume_2023.pdf"
import { MdFileDownload } from "react-icons/md"

const Resume = () => {
  return (
    <div className="resume-content">
      {/* <a href='/' className='home-button'><MdHome size='2em'/></a> */}
      {/* <h1 className='mb-5'>Experience</h1> */}
      <div className="mb-5">
        <ul className="resume-list">
          <li>
            <h3>Mobile Developer, Boost Education</h3>
            <p className="date">Aug 2021 - May 2022</p>
            <p>
              Assisted in development of 3 new features and facilitated 2 major launches launches for both Android & IOS platforms. Fixed numerous UI and backend bugs. Provisioned new customers in AWS utelizing services such as Terrafrom, Cloudfront, EC2, Route53 and VPC. Configured analytics integration with Ingromet & google sheets. Worked through major upgrade MobX, the front-end state management library.
            </p>
          </li>
          {/* <li>
              <h3>Solutions Consultant, Kiio Labs</h3>
              <p className='date'>January 2019 - Current</p>
              <p>
                &bull; Webiste Design + Implementation
                <br />
                &bull; Mobile App MVPs
                <br />
                &bull; Data Recovery
              </p>
            </li> */}
          <li>
            <h3>Implementation Engineer, Wunderkind (SHQ)</h3>
            <p className="date">Dec 2017 - Oct 2019 & Jan 2021 - Aug 2021</p>
            <p>
              Owned the process of scoping client’s website to understand the structure and availability of shopper behavioral data (e.g. browsing products/categories, carting and purchasing products).
              Spearheaded meetings to discuss technical aspects of implementation.
            </p>
          </li>
          <li>
            <h3>Software Developer, Pondurance</h3>
            <p className="date">Aug 2017 - Oct 2017</p>
            <p>
              Enhanced in-house ticketing tool by adding numerous key features.
              Ruby on Rails, React, Javascript, Sass, Bootstrap are some of the
              technologies and libraries used.
            </p>
          </li>
          <li>
            <h3>Web Developer, Red Tettemer O'Connell</h3>
            <p className="date">Mar 2017 - Jun 2017</p>
            <p>
              Configured an AWS environment for a legacy WordPress site by integrating the necessary plugins to store images in the S3 cloud storage. I also developed the capability for users to zoom in on images from both desktop and mobile devices, using programming languages such as Ruby, jQuery, JavaScript, and SASS.
            </p>
          </li>
          <li>
            <h3>Project Based Learning, New York Code & Design</h3>
            <p className="date">Nov 2016 - Feb 2017</p>
            <p>
              This 3-month intensive program introduced technologies such as
              JavaScript, jQuery SASS/CSS, HTML5, Ruby, Ruby on Rails, Sinatra,
              Activerecord and some test-driven development.
            </p>
          </li>
        </ul>
        <div className="text-center">
          <a href={CV} download>
            <MdFileDownload size="2em" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
