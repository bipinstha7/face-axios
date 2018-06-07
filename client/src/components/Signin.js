import React from 'react';

const Signin = ({onRouteChange}) => {
  return (
    <div className="col container row">
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={() => onRouteChange("home")}
          >Signin</button>
          <a href="" className="pl-2">Register</a>
        </form>
      </div>
    </div>
  )
}
        
export default Signin;