import { useState, useEffect } from 'react'
import Me from './assets/images/pkw.png'
import GitHubLogo from './assets/github.svg'
import GitLabLogo from './assets/gitlab.svg'
import LinkedInLogo from './assets/linkedin.svg'
import Instagram from './assets/instagram.svg'
import Gmail from './assets/gmail.svg'
import Twitter from './assets/twitter.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    console.log("theme changed")
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const year = new Date().getFullYear()

  return (
    <div className={`app-container ${theme}`}>

      <div className="header-buttons-container">
        <div className="socials">
          <a href="https://gitlab.com/pwathome" target="_blank" rel="noopener noreferrer">
            <img src={GitLabLogo} height={20} width={20} />
          </a>
          <a href="https://www.linkedin.com/in/paulwathome" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} height={20} width={20} />
          </a>
          <a href="https://github.com/pwathome" target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} height={20} width={20} />
          </a>
        </div>

        <div onClick={toggleTheme} className="dark-toggle">
          <img src={Me} height={30} width={30} />
        </div>
      </div>

      <div className="heading">
        <h1>Paul Wathome</h1>
        <div className="links-container">
          <span className="link">&#8599;blog.</span>
          <span className="link">&#8599;hobbies.</span>
          <a href="mailto:pkwdigital@gmail.com">
            <span className="link">&#8599;contact.</span>
          </a>
        </div>
        <p>
          A space for my experiences, thoughts, projects & hobbies.
        </p>
      </div>

      <div className="about">
        <h2>about.</h2>
        <div className="about-section-container">
          <div className="section">
            <h3>experience</h3>

            <div className="section-body">
              <h4>Freelance Developer</h4>
              <span>2022 - Current</span><br />
              <i><span>Freelance</span></i>
            </div>

            <div className="section-body">
              <h4>Full Stack Developer</h4>
              <span>2022 - 2023</span><br />
              <i><span>Boost Education</span></i>
            </div>

            <div className="section-body">
              <h4>Implementation Engineer</h4>
              <span>2019 - 2021</span><br />
              <i><span>Wunderkind</span></i>
            </div>
          </div>

          <div className="section">
            <h3>languages & frameworks</h3>

            <h4><i>Languages</i></h4>
            <span>JavaScript</span><br />
            <span>Python</span><br />
            <span>Ruby</span>

            <h4><i>Frameworks & libraries</i></h4>
            <span>Django</span><br />
            <span>Express</span><br />
            <span>ReactJS</span><br />
            <span>React Native</span><br />
            <span>Ruby on Rails</span><br />
          </div>

          <div className="section">
            <h3>skills & tools</h3>

            <span>MySQL</span><br />
            <span>MongoDB</span><br />
            <span>PostgresSQL</span><br /><br />

            <span>Linux</span><br />
            <span>Docker</span><br />
            <span>Caprover</span><br />
            <span>VSCode | Vim</span><br />
            <span>Git | Gitlab | Github</span><br />
            <span>Linode | AWS | GCP</span><br /><br />

            <span>Figma</span><br />
            <span>Markdown</span><br />
            <span>HTML5 | CSS3</span><br />

          </div>

          <div className="section project-section">
            <h3>some projects</h3>

            <input type="checkbox" id="title1" />
            <label htmlFor="title1">EK</label>

            <div className="content">
              <p>Progressive web app to share music.</p>
              <a href="https://gitlab.com/pwathome/djek" target="_blank" rel="noopener noreferrer">&#8599; code</a><br />
              <a href="https://encryptedkenyan.com/" target="_blank" rel="noopener noreferrer">&#8599; live site</a>
            </div>

            <input type="checkbox" id="title2" />
            <label htmlFor="title2">RFW</label>

            <div className="content">
              <p>Static informational site with contact form.</p>
              <a href="https://gitlab.com/pwathome/rfw" target="_blank" rel="noopener noreferrer">&#8599; code</a><br />
              <a href="https://rapefreeworld.com/" target="_blank" rel="noopener noreferrer">&#8599; live site</a>
            </div>

            <input type="checkbox" id="title3" />
            <label htmlFor="title3">Foleni</label>

            <div className="content">
              <p>Barber shop managment solution.</p>
              <a href="https://gitlab.com/foleni-group/foleni-mobile" target="_blank" rel="noopener noreferrer">&#8599; code</a><br />
              {/* <a href="https://foleni.io" target="_blank" rel="noopener noreferrer">&#8599; live site</a> */}
            </div>
            <input type="checkbox" id="title4" />
            <label htmlFor="title4">This Site</label>

            <div className="content">
              <p>A portfolio site built with vit.</p>
              <a href="https://gitlab.com/pwathome/cv3" target="_blank" rel="noopener noreferrer">&#8599; code</a><br />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-section-container">
          <div className="section">
            <div className="section-body">
              <h4><i>general.</i></h4>
              <span className="link">&#8599;blog.</span><br />
              <span className="link">&#8599;hobbies.</span>
            </div>
          </div>

          <div className="section">

            <h4><i>contact.</i></h4>
            <span>
              <a href="https://www.linkedin.com/in/paulwathome" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} height={20} width={20} />&nbsp;
              </a>
              linkedin
            </span><br />
            <span>
              <a href="mailto:pkwdigital@gmail.com">
                <img src={Gmail} height={20} width={20} />&nbsp;
              </a>
              mail
            </span><br />
          </div>

          <div className="section">
            <h4><i>socials.</i></h4>
            <span>
              <a href="https://instagram.com/encryptedkenyan" rel="noopener noreferrer" target="_blank">
                <img src={Instagram} height={20} width={20} />
              </a>
            </span><br />
            <span>
              <a href="https://twitter.com/encryptedkenyan" rel="noopener noreferrer" target="_blank">
                <img src={Twitter} height={20} width={20} />
              </a>
            </span><br /><br />
          </div>
        </div>
      </div>
      <p className="footer-text">
        &#9400; {year}, Paul K Wathome
      </p>
      <small>Site is under construction so please excuse any typos or visual issues...Thank you :)</small>
    </div>
  )
}

export default App
