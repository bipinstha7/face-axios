import React from "react";

const Navigaton = ({onRouteChange, isSignedin}) => {
  if(!isSignedin) {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p 
                className="nav-link"
                onClick={() => onRouteChange("signin")}
              >Sign in </p>
            </li>
            <li className="nav-item">
              <p 
                className="nav-link"
                onClick={() => onRouteChange("register")}
              >Register</p>
            </li>
            </ul>
        </div>
      </nav>
    )
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <p
              className="nav-link"
              onClick={() => onRouteChange("signout")}
            >Signout</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigaton;