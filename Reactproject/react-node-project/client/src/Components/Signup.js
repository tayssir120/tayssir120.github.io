import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends React.Component{
    constructor(){
      super()
      this.state = {
        username:'',
        email:'',
        password:'',
        password2:'',
      }
      this.changeUsername = this.changeUsername.bind(this)
      this.changeEmail = this.changeEmail.bind(this)
      this.changePassword = this.changePassword.bind(this)
      this.changePassword2 = this.changePassword2.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
  
    changeUsername(event){
      this.setState({
        username:event.target.value
      })
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
    changePassword2(event){
      this.setState({
        password2:event.target.value
      })
    }
    
    onSubmit(event){
      event.preventDefault();
      if(this.state.password !== this.state.password2){
        alert("passwords are not the same")
      } else{
        axios.post("http://localhost:8000/user/signup?username=" + this.state.username + "&email=" + this.state.email+ "&password=" + this.state.password)
      .then(res => console.log(res.data))
      window.location = '/signin';
      }
      
    };
    render(){
    return(
         <div>  
    <div className="slider5">
    <div className="log">
      <h2 className="fo">Create an Account </h2>
      <h4 className="fo">Sign up using: </h4>
     
        <div id="flash-msg" class="alert alert-danger">
        </div>
        <form action="/user/signup" method="POST" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              class="in"
              name="name"
              onChange={this.changeUsername}
              value={this.state.username}
              id="name"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" 
            class="in" 
            name="email" 
            id="email" 
            onChange={this.changeEmail}
            value={this.state.email}
            required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="in"
              name="password"
              id="password"
              onChange={this.changePassword}
              value={this.state.password}
              required
            />
          </div>
          <div className="form-group">
            <label for="password2">Verify Password</label>
            <input
              type="password"
              class="in"
              name="password2"
              id="password2"
              onChange={this.changePassword2}
              value={this.state.password2}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-danger btn-bloc">
            Sign Up
          </button>
          
        </form>
      </div>
    </div>
  </div>
           
   );
}
}