import React from 'react';

const Register = ({onRouteChange}) => {
  return (
    <div className="col container row">
      <div className="col-md-6">
        <div>
          <div className="form-group">
          <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
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
          >Register</button>
          <p 
            className="pl-2 d-inline"
            onClick={() => onRouteChange("signin")}  
          >Signin</p>
        </div>
      </div>
    </div>
  )
}
        
export default Register;