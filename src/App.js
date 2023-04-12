import React from "react"
import "./App.css"
import MainImage from "./components/MainImage/MainImage"
import MainContent from "./components/MainContent/MainContent"
// import Nav from "./components/Nav/Nav"

const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <MainContent />
      <MainImage />
    </div>
  )
}

export default App
