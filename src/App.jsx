// import { useState } from 'react'
// import me from './assets/images/pkw.png'
import GitHubLogo from './assets/github.svg'
import GitLabLogo from './assets/gitlab.svg'
import LinkedInLogo from './assets/linkedin.svg'
import Instagram from './assets/instagram.svg'
import Moon from './assets/icomoon.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="app-container">

      <div className="header-buttons-container">
        <div className="socials">
          <img src={LinkedInLogo} height={20} width={20} />
          <img src={GitLabLogo} height={20} width={20} />
          <img src={GitHubLogo} height={20} width={20} />
          <img src={Instagram} height={20} width={20} />
        </div>

        <div className="dark-toggle">
          <img src={Moon} height={20} width={20} />
        </div>
      </div>

      <div className="heading">
        <h1>Paul Wathome</h1>
        <div className="links-container">
          <span className="link">&#8599;blog.</span>
          <span className="link">&#8599;inspiration.</span>
          <span className="link">&#8599;contact.</span>
        </div>
        <p>
          I'm baby lo-fi celiac cliche poutine. Letterpress bodega boys flannel, direct trade artisan cupping vexillologist narwhal XOXO affogato YOLO intelligentsia cornhole. Synth succulents chicharrones kitsch keytar tbh, bespoke taiyaki raw denim poke bodega boys. Fit art party wayfarers church-key fingerstache occupy humblebrag pug succulents neutra paleo lyft literally flexitarian adaptogen.
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

            <h4><i>Frameworkds</i></h4>
            <span>ReactJS</span><br />
            <span>Django</span><br />
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
            <span>VSCode | Vim</span><br />
            <span>Gitlab | Github</span><br />
            <span>Linode | AWS | GCP</span><br /><br />

            <span>Figma</span><br />
            <span>HTML5 | CSS3</span><br />
            <span>Markdown</span><br />

          </div>

          <div className="section">
            <h3>some projects</h3>
            
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
