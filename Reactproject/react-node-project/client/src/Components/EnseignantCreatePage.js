import React, {Component} from 'react';
import axios from 'axios';


class EnseignantCreatePage extends React.Component{
    constructor() {
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
        this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          id: null,
          name: "",
          DateofBirth: "",
          placeofBirth: "",
          description: "", 
        };
        
      }
      onSubmit(event){
        event.preventDefault(); 
        axios.post("http://localhost:8000/enseignants/new?name=" + this.state.name + "&placeofBirth=" + this.state.placeofBirth + "&DateofBirth=" + this.state.DateofBirth + "&description=" + this.state.description)
        .then(res => console.log(res.data))
        console.log("submitted")
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
    render(){
        return(
            <div>
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

        )
    }
}

export default  EnseignantCreatePage