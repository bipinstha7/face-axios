import React, {Component} from 'react';

import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: "",
      signinPassword: ""
    }
  }

  onEmailChange = (event) => {
    this.setState({signinEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signinPassword: event.target.value});
  }

  onSubmitSignin = (event) => {
    
    event.preventDefault();

    const loginFormData = {
      email: this.state.signinEmail,
      password: this.state.signinPassword
    }
    axios.post("http://localhost:5000/signin", loginFormData)
      .then(result => {
        if(result.data === "success") {
          this.props.onRouteChange("home");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const {onRouteChange} = this.props;
    return (
      <div className="col container row">
        <div className="col-md-6">
          <form onSubmit={this.onSubmitSignin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" 
              onChange={this.onEmailChange}
              id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" 
              onChange={this.onPasswordChange}
              id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
            >Signin</button>
            <p 
              className="pl-2 d-inline"
              onClick={() => onRouteChange("register")}
            >Register</p>
          </form>
        </div>
      </div>
    )
  }
}
        
export default Signin;
