import React from "react";

const Navigaton = ({onRouteChange}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a 
              className="nav-link" href=""
              onClick={() => onRouteChange("signin")}
            >Sign in </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" href=""
              onClick={() => onRouteChange("register")}
            >Register</a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" href=""
              onClick={() => onRouteChange("signout")}  
            >Signout</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigaton;