import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Etudiant from "../Components/etudiant.component"


class Etudiants extends React.Component{
	constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveEtudiants = this.retrieveEtudiants.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveEtudiant = this.setActiveEtudiant.bind(this);
    
        this.state = {
          etudiants: [],
          currentEtudiant: "null",
          currentIndex: -1,
          searchName: ""
        };
      }
    
      componentDidMount() {
        this.retrieveEtudiants();
      }
      onChangeSearchName(e) {
        const searchName = e.target.value;
    
        this.setState({
          searchName: searchName
        });
      }

      retrieveEtudiants() {
      
        axios.get("http://localhost:8000/etudiants/all")
		//.then(res => res.json())
		 .then(data => {
			 console.log(data.data.etudiants)
			this.setState({ etudiants: data.data.etudiants })
			//this.state.etudiants = data.data.etudiants
		 })	
      
	  console.log(this.state.etudiants)
        //window.location = '/etudiants';
      }
     
      refreshList() {
        this.retrieveEtudiants();
        this.setState({
          currentEtudiant: null,
          currentIndex: -1
        });
      }
    
      setActiveEtudiant(etudiant, index) {
        this.setState({
          currentEtudiant: etudiant,
          currentIndex: index
        });
      }
      
  render() {
    const { etudiants} = this.state;
        return(
            <div>
                <div class="hero common-hero">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="hero-ct">
					<h1>Etudiants</h1>
					<ul className="breadcumb">
						<li className="active"><Link to={"/"}>Home</Link></li>
						<li> <span className="ion-ios-arrow-right"></span>Gestion des étudiants</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>


<div className="page-single">
	<div className="container">
		<div className="row">
			<div className="col-md-9 col-sm-12 col-xs-12">
				<div className="topbar-filter user">
					<p>Ajouter un Etudiant</p>
					<Link to={"/Etudiants/new"} className="list"><i className="ion-ios-plus "></i></Link>			

				</div>
				<div className="flex-wrap-movielist grid-fav">
					<div className="movie-item-style-2 movie-item-style-1 style-3">
						<div className="hvr-inner">
							<Link  to={"/etudiants/"} > Read more <i className="ion-android-arrow-dropright"></i> </Link>
						</div>
						
						
					</div>	   			
			</div>	
					<h4>Etudiants List</h4>

				<ul className="list-group">
				{etudiants &&
              etudiants.map((etudiant) => (
				  
               <Etudiant
                id= {etudiant._id}
                name=  {etudiant.name}
                dateofBirth=  {etudiant.dateofBirth}
                placeofBirth = {etudiant.placeofBirth}
                description={etudiant.description}/>
              ))}
          </ul>
				
			
			</div>
			<div className="col-md-3 col-sm-12 col-xs-12">
				<div className="sidebar">
					<div className="sb-search sb-it">
						<h2 className="sb-title">Search Etudiants</h2>
            <form action="/etudiants" method="GET">
              <div className="form-row">
                <div className="form-item">
                  <input type="text" name="name" placeholder="Name"/><br/>
                  <button style={{"margin-left" : "50 px"}} className="item item-1 redbtn" type="submit">Search <i className="ion-search"></i></button>

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

export default  Etudiants