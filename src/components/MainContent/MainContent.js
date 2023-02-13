import React from "react"
import "./MainContent.css"
import routes from "../../Routes"
// import { Col } from "reactstrap"
import { Route } from "react-router-dom"
import Nav from "../Nav/Nav"

const MainContent = () => {
  return (
    <div id="main-content">
      <Nav />
      {routes.map((route) => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </div>
  )
}

export default MainContent
