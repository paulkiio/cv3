import React from "react"
import "./MainContent.css"
import routes from "../../Routes"
// import { Col } from "reactstrap"
import { Route } from "react-router-dom"
import Nav from "../Nav/Nav"

const MainContent = () => {
  return (
    <>
			<div
        id="main-content"
        lg={{ size: 6 }}
        md={{ size: 6 }}
        sm={{ size: 12, order: 2 }}
        xs={{ size: 12, order: 2 }}
      >
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
    </>
  )
}

export default MainContent
