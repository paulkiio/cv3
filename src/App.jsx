import { useState } from 'react'
import reactLogo from './assets/react.svg'
import me from './assets/images/pkw.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href="#">
        <img src={me} className="logo react" alt="React logo" />
      </a>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Working on the Vite + React version of the site,</h1>
      <h2>Check back for upates soon...</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Last updated {count} days ago...
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
