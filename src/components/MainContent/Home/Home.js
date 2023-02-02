import React from 'react'
import './Home.css'

const Home = () => {
    const getCurrentDay = () => {
        const dayNumber = new Date()
        const dayList = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday']
        return dayList[dayNumber.getDay()]
    }

    return <div className="home-container">
        <div>
            <h1>Hi, I'm Paul Wathome</h1>
            <a href='mailto:pkwdigital@gmail.com'>[AVAILABLE FOR HIRE]</a>
            <p className='lead mb-3'>Developer &amp; Tech Geek</p>
            <p>
                Currently based in Indianapolis Indiana. I am passionate about leveraging technology to solve complex problems. When I'm not writing code, some of my hobbies include playing soccer, immersing myself in other cultures through travel, DJ-ing and working on my cars. Have look around and have a fantastic <span id='currentDay'>{ getCurrentDay() }</span> 😉
            </p>

            <p className='social-links'>
                <a href='https://www.linkedin.com/in/paulwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>LinkedIn</a>
                <a href='https://github.com/pwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>GitHub</a>
                <a href='https://gitlab.com/pwathome' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>GitLab</a>
                {/* <a href='https://twitter.com/encryptedkenyan/' target='_blank' rel='noopener noreferrer' className='mr-2 mb-2'>Twitter</a> */}
            </p>
        </div>
        
        <h2 className='mb-4 mt-4'>What I'm currently up to...</h2>
        
        <div className="status-container">
            <div className='media custom-media  d-block'>
                <div className='media-body'>
                    <h4 className='mt-3'>Freelancing</h4>
                    <p>
                        - Update and maintain existing projects for clients. <br />
                        - Overhauling internal processes. <br /><br />
                        Want to <a href='mailto:pkwdigital@gmail.com'> work with me? </a>
                        Reach out and lets chat.
                    </p>
                </div>
            </div>

            {/* <div className='media custom-media  d-block'>
              
                <div className='media-body'>
                    <h4 className='mt-3'>
                        <a href='http://example.com' rel='noopener noreferrer' target='_blank'>Encrypted Kenyan</a>
                    </h4>
                    <p>
                        Music makes the world make sense. <a href='https://mixcloud.com/encryptedkenyan' rel="noopener noreferrer" target='_blank'>here's</a> some mixes I've made over the years. More content coming very soon 🎧
                    </p>
                </div>
            </div> */}
        </div>
    </div>
}

export default Home