import { useState } from 'react'
import me from './assets/images/pkw.png'
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
        {/* <a href="#">LinkedIN</a> */}
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
        <p>
          I'm baby lo-fi celiac cliche poutine. Letterpress bodega boys flannel, direct trade artisan cupping vexillologist narwhal XOXO affogato YOLO intelligentsia cornhole. Synth succulents chicharrones kitsch keytar tbh, bespoke taiyaki raw denim poke bodega boys. Fit art party wayfarers church-key fingerstache occupy humblebrag pug succulents neutra paleo lyft literally flexitarian adaptogen.
        </p>
      </div>

      <div className="about">
        <h2>about.</h2>
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
