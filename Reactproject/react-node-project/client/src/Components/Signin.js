import React from 'react';
import axios from 'axios';


class Signin extends React.Component{
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8000/user/signin?email=' + this.state.email + "&password=" + this.state.password)
    .then(res => console.log(res.data))
    window.location = '/'
  };
    render(){
        return(
            <div>
                
<div class="slider5">
    <div class="log">
      <h2 class="fo">Welcome Back! </h2>
      <h4 class="fo">Log in using </h4>
     
        <div id="flash-msg" class="alert alert-danger">
        </div>
        <form action="/user/signin" method="POST" onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="in"
             name="email"
            id="email" 
            onChange={this.changeEmail}
            value={this.state.email}  
              />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="in"
              name="password"
              id="password"
              onChange={this.changePassword}
              value={this.state.password}
            />
          </div>
          <button type="submit" class="sub">
            Sign In
          </button>
        </form>
        <p class="ap">
          Don't have an account? <a href="/user/signup"> Sign Up!</a>
        </p>
      </div>
    </div>
  </div>
           
        )
    }
}

export default Signin