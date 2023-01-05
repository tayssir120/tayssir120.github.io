import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Enseignant from "../Components/enseignant.component";


class Enseignants extends React.Component{
	constructor(props) {
        super(props);
        this.retrieveEnseignants = this.retrieveEnseignants.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveEnseignant = this.setActiveEnseignant.bind(this);
        
        this.state = {
          enseignants: [],
          currentEnseignant: "null",
          currentIndex: -1,
          searchName: ""
        };
      }

	  componentDidMount() {
        this.retrieveEnseignants();
      }
      onChangeSearchName(e) {
        const searchName = e.target.value;
    
        this.setState({
          searchName: searchName
        });
      }
	  retrieveEnseignants() {
      
        axios.get("http://localhost:8000/enseignants/all")
		 .then(data => {
			 console.log(data.data.enseignants)
			this.setState({ enseignants: data.data.enseignants })
		 })	
      
	  console.log(this.state.enseignants)
      }
	  refreshList() {
        this.retrieveEnseignants();
        this.setState({
			currentEnseignant: null,
          currentIndex: -1
        });
      }
    
      setActiveEnseignant(enseignant, index) {
        this.setState({
			currentEnseignant: enseignant,
          currentIndex: index
        });
      }


    render(){
		const { enseignants } = this.state;
        return(
            <div>
            <div class="hero common-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>Enseignants</h1>
					<ul class="breadcumb">
						<li class="active"><Link to="/">Home</Link></li>
						<li> <span class="ion-ios-arrow-right"></span>Gestion des Enseignants</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="page-single">
	<div class="container">
		<div class="row">
			<div class="col-md-9 col-sm-12 col-xs-12">
				<div class="topbar-filter user">
					<p>Ajouter un Enseignant</p>
					<Link to={"/enseignants/new"} className="list"><i className="ion-ios-plus "></i></Link>		

				</div>
				<div class="flex-wrap-movielist grid-fav">
					
					<div class="movie-item-style-2 movie-item-style-1 style-3">
						
						<div class="hvr-inner">
						<Link  to={"/enseignants/"} > Read more <i className="ion-android-arrow-dropright"></i> </Link>
						</div>

						
						<div class="mv-item-infor">
							
						</div>
					</div>	 
					

				<div className="list-group">
				{enseignants &&
              enseignants.map((enseignant) => (
				  
               <Enseignant
			   id= {enseignant._id}
			   name=  {enseignant.name}
			   dateofBirth=  {enseignant.dateofBirth}
			   placeofBirth = {enseignant.placeofBirth}
			   description={enseignant.description}/>
              ))}
          </div>   			
			</div>
			</div>
			<div class="col-md-3 col-sm-12 col-xs-12">
				<div class="sidebar">
					<div class="sb-search sb-it">
						<h2 class="sb-title" >Search Enseignants</h2>
            <form action="/enseignants" method="GET">
              <div class="form-row">
                <div class="form-item">
                  <input type="text" name="name" value="<%= searchOptions.name %>" placeholder="Name"/><br/>
                  <button style={{"margin-left": "50px"}} class="item item-1 redbtn" type="submit">Search <i class="ion-search"></i></button>

                </div>
              </div>
            </form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
            </div>
        )
    }
}

export default  Enseignants