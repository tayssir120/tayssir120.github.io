import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Profile extends React.Component{
	constructor(props) {
        super(props);
        this.retrieveEtudiant = this.retrieveEtudiant.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
		this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
    
        this.state = {
			id: this.props.match.params.id,
			name: "",
			dateofBirth: "",
			placeofBirth: "",
			description: "", 
        };
      }
	  componentDidMount() {
		this.retrieveEtudiant()
		
	}
	
	retrieveEtudiant() {
		
        axios.get("http://localhost:8000/etudiants/one?id="+this.state.id)
		//.then(res => res.json())
		 .then(data => {
			 console.log(data.data.name)
			this.setState({
				 name: data.data.name,
				 dateofBirth:  data.data.dateofBirth,
				placeofBirth:  data.data.placeofBirth,
				description:  data.data.description, 
			})
			//this.state.etudiants = data.data.etudiants
		 })	}
		 onSubmit(event){
			event.preventDefault();
			console.log(this.state.id)
			axios.put("http://localhost:8000/etudiants/edit?id="+ this.state.id + "&name=" + this.state.name + "&placeofBirth=" + this.state.placeofBirth + "&DateofBirth=" + this.state.DateofBirth + "&description=" + this.state.description)
			.then(res => console.log(res.data))
			window.location = '/profile/'+ this.state.id;
		  };
		  
		  onChangeName(event) {
			this.setState({
			  name: event.target.value
			});
		  }
		  onChangeDateofBirth(event) {
			this.setState({
				DateofBirth: event.target.value
			});
		  }
		  onChangeplaceofBirth(event) {
			this.setState({
			  placeofBirth: event.target.value
			});
		  }
		
		  onChangeDescription(event) {
			this.setState({
			  description: event.target.value
			});
		  }

    render(){
        return(
            <div>
                <div class="hero user-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1> profile</h1>
					<ul class="breadcumb">
						<li class="active"><Link to="/">Home</Link></li>
						<li> <span class="ion-ios-arrow-right"></span>Profile</li>
					</ul>
				</div>
			
			</div>
		</div>
	</div>
</div>
<div class="page-single">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-3 col-sm-12 col-xs-12">
				<div class="user-information">
					<div class="user-img">
						<a href="#"><img src="assets/images/uploads/user-img.png" alt=""/><br/></a>
						<a href="#" class="redbtn">Change avatar</a>
					</div>
					<div class="user-fav">
						<p>Account Details</p>
						<ul>
							<li  class="active"><Link to="/Profile">Profile</Link></li>
						</ul>
					</div>
					<div class="user-fav">
						<p>Others</p>
						<ul>
							<li><a href="#">Change password</a></li>
							<li><a href="#">Log out</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-9 col-sm-12 col-xs-12">
				<div class="form-style-1 user-pro" action="#">
					<form onSubmit={this.onSubmit}  class="user">
						<h4>01. Profile details</h4>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>Username</label>
								<input type="text" onChange={this.onChangeName} value={this.state.name}/>
							</div>
							<div class="col-md-6 form-it">
								<label>dateofBirth</label>
								<input type="text" onChange={this.onChangeDateofBirth} value={this.state.dateofBirth}/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 form-it">
								<label>placeofBirth</label>
								<input type="text" onChange={this.onChangeplaceofBirth} value={this.state.placeofBirth}/>
							</div>
							<div class="col-md-6 form-it">
								<label>description</label>
								<input type="text" onChange={this.onChangeDescription} value={this.state.description}/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-2">
								<input class="submit" type="submit" value="save"/>
							</div>
						</div>	
					</form>
					
				</div>
               
			</div>
		</div>
	</div>
</div>
            </div>
        )
    }
}

export default Profile