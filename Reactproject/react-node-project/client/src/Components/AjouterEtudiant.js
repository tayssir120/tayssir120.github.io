import React, { Component } from "react";
// import EtudiantCreatePage from "../Components/EtudiantCreatePage";
import axios from "axios";
export default class AjouterEtudiant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.newEtudiant = this.newEtudiant.bind(this);

    this.state = {
      id: null,
      title: "",
      dateofBirth: "",
      placeofBirth: "",
      description: "", 
      published: false,
      submitted: true
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDateofBirth(e) {
    this.setState({
      dateofBirth: e.target.value
    });
  }
  onChangeplaceofBirth(e) {
    this.setState({
      placeofBirth: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8000/etudiants/new?name=" + this.state.name + "&placeofBirth=" + this.state.placeofBirth + "&DateofBirth=" + this.state.DateofBirth + "&description=" + this.state.description)
    .then(res => console.log(res.data))
    window.location = '/etudiants';
  };
  newEtudiant() {
    this.setState({
      id: null,
      name: "",
      dateofBirth: "",
      placeofBirth: "",
      description: "",
      coverImage:"",
      published: false,
      submitted: false
    });
  }

  render() {
  return(    
    <div className="page-single">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 .col-sm-push-8">
          <div className="topbar-filter user">
       <h4>Etudiant</h4>
      <form action="/" method="POST" onSubmit={this.onSubmit}>
    <div className="form-group">
      <label htmlFor="namel">Name</label>
      <input
        aria-label="NameETU"
        type="text"
        className="form-control"
        id="name"
        required
        value={this.state.name}
        onChange={this.onChangeName}
        name="name"
      />
    </div>
    <div className="form-group">
      <label htmlFor="PlaceOfbirth">PlaceOfbirth</label>
      <input
        aria-label="PlaceOfbirthETU"
        type="text"
        className="form-control"
        id="placeofbirth"
        required
        value={this.state.placeofBirth}
        onChange={this.onChangeplaceofBirth}
        title="placeOfbirth"
      />
    </div>
    <div className="form-group">
      <label htmlFor="dateofBirth">dateofBirth</label>
      <input
        aria-label="dateofBirthETU"
        type="text"
        className="form-control"
        id="dateofBirth"
        required
        value={this.state.DateofBirth}
        onChange={this.onChangeDateofBirth}
        name="dateofBirth"
      />
    </div>

    <div className="form-group">
      <label htmlFor="description">description</label>
      <input
      aria-label="DescriptionETU"
        type="text"
        className="form-control"
        id="description"
        required
        value={this.state.description}
        onChange={this.onChangeDescription}
        name="description"
      />
    </div>
    <button data-testid="AddEtudiant" type="submit" className="btn btn-success">
      Submit
    </button>
   </form>
   </div>
   </div>
   </div>
   </div>
</div>
);
}
}