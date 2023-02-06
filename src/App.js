import React, { Component } from "react"
import "./App.css"
import { Row } from "reactstrap"
import MainImage from "./components/MainImage/MainImage"
import MainContent from "./components/MainContent/MainContent"

const App = () => {
  return (
    <div className="App">
      <div id="outer-container">
        <Row id="page-wrap">
          <MainContent />
          <MainImage />
        </Row>
      </div>
    </div>
  )
}

export default App
