import React, {Component} from 'react';
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onRegisterSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    axios.post("http://localhost:5000/register", newUser)
      .then(user => {
        if(user) {
          this.props.loadUser(user.data);
          this.props.onRouteChange("home");
        }
      })
  }

  render() {
    const {onRouteChange} = this.props;
    return (
      <div className="col container row">
        <div className="col-md-6">
          <form onSubmit={this.onRegisterSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control" 
                onChange={this.onNameChange}
                id="name" 
                placeholder="Enter your name" />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                onChange={this.onEmailChange}
                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input 
                type="password" className="form-control" 
                onChange={this.onPasswordChange}
                id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
            >Register</button>
            <p 
              className="pl-2 d-inline"
              onClick={() => onRouteChange("signin")}  
            >Signin</p>
          </form>
        </div>
      </div>
    )
  }
}
        
export default Register;