import React from 'react';

const Signin = ({onRouteChange}) => {
  return (
    <div className="col container row">
      <div className="col-md-6">
        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={() => onRouteChange("home")}
          >Signin</button>
          <p 
            className="pl-2 d-inline"
            onClick={() => onRouteChange("register")}  
          >Register</p>
        </div>
      </div>
    </div>
  )
}
        
export default Signin;