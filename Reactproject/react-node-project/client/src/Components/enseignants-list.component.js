import React, { Component } from "react";
import axios from "axios";

export default class EnseignantsList extends Component {
      constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
        this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onReset = this.onReset.bind(this);
    
        this.state = {
          id: props.id,
          name: props.name,
          dateofBirth: props.dateofBirth,
          placeofBirth: props.placeofBirth,
          description: props.description, 
        };
      }   
    
      onSubmit(event){
        event.preventDefault();
        console.log(this.state.id)
        axios.put("http://localhost:8000/enseignants/edit?id="+ this.state.id + "&name=" + this.state.name + "&placeofBirth=" + this.state.placeofBirth + "&DateofBirth=" + this.state.DateofBirth + "&description=" + this.state.description)
        .then(res => console.log(res.data))
        window.location = '/enseignants';
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
  
      onReset(event){
        event.preventDefault();
        window.location = '/enseignants';
      };
    
  render() {
    const { currentEnseignant } = this.state;

    return (
      <div className="col-md-6">
      {currentEnseignant ? (
       <div>
       <br />
       <p>Please click on a Etudiant...</p>
     </div>
      ) : (
        <form action="/" method="POST" onReset={this.onReset} onSubmit={this.onSubmit}>
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
        <button type="submit" className="btn btn-success">
          Edit
        </button>
        <button  type="reset" className="btn btn-success">
          Annuler
        </button>
       </form>
      )}
    </div>
  
);
}
}



