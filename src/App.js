import React from "react"
import "./App.css"
import MainImage from "./components/MainImage/MainImage"
import MainContent from "./components/MainContent/MainContent"

const App = () => {
  return (
    <div className="App">
      <MainContent />
      <MainImage />
    </div>
  )
}

export default App
