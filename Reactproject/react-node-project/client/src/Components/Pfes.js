import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Pfe from "../Components/pfe.component";

class Pfes extends React.Component{
	constructor(props) {
        super(props);
        this.retrievePfes = this.retrievePfes.bind(this);
        this.refreshList = this.refreshList.bind(this);
        
    
        this.state = {
          pfes: [],
          currentPfe: "null",
          currentIndex: -1,
        };
      }
	  componentDidMount() {
        this.retrievePfes();
      }
	  retrievePfes() {
      
        axios.get("http://localhost:8000/pfes/all")
		 .then(data => {
			 console.log(data.data.pfes)
			this.setState({ pfes: data.data.pfes })
		 })	
      
	  console.log(this.state.pfes)
      }
     
      refreshList() {
        this.retrievePfes();
        this.setState({
		  currentPfe: null,
          currentIndex: -1
        });
      }
    
      setActiveEtudiant(Pfe, index) {
        this.setState({
			currentPfe: Pfe,
          currentIndex: index
        });
      }
    
    render(){
		const { pfes} = this.state;
        return(
            <div>
                <div class="hero common-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>pfes</h1>
					<ul class="breadcumb">
						<li class="active"><Link to="/">Home</Link></li>
						<li> <span class="ion-ios-arrow-right"></span>Gestion des pfes</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="page-single">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-8 col-sm-12 col-xs-12">
				<div class="topbar-filter">
					<p>Ajouter un PFE</p>
					<Link to={"/pfes/new"} className="list"><i className="ion-ios-plus "></i></Link>
				</div>
				<div class="flex-wrap-movielist">
					
					<div class="movie-item-style-2 movie-item-style-1" >
						
						<div class="hvr-inner">
							<a  href="/pfes/"> Read more <i class="ion-android-arrow-dropright"></i> </a>
						</div>
						
					</div>	
				</div>
			</div>

			<h4>Pfes List</h4>

				<ul className="list-group">
				{pfes &&
              pfes.map((pfe) => (
				  
               <Pfe
			   id= {pfe._id}
			   title=  {pfe.title}
			   description=  {pfe.description}
			   releaseDate = {pfe.releaseDate}
			   createdAt={pfe.createdAt}
			   />

              ))}
          </ul>
			<div class="col-md-4 col-sm-12 col-xs-12">
        <div class="sidebar">
          {/* <div class="searh-form">
            <h4 class="sb-title">Search for PFE</h4>
            <form class="form-style-1" action="/pfes" method="GET">
              <div class="row">
                <div class="col-md-12 form-it">
                  <label>Title</label>
                  <input type="text" name="title" value="<%= searchOptions.title %>"/>
                </div>
                <div class="form-row form-row-end">
					<button style={{ "margin-left": "80px"}} class="item item-1 redbtn" type="submit"> Search <i class="ion-search"></i></button>
                </div>
              </div>
            </form>
      
          </div> */}
        </div>
      </div>
		</div>
	</div>
</div>

            </div>
        )
    }
}

export default Pfes