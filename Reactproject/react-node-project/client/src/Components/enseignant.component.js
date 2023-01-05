import React, { Component } from "react";
import axios from "axios";
import EnseignantsList from "../Components/enseignants-list.component"
export default class Etudiant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.deleteEnseignant = this.deleteEnseignant.bind(this);
    this.onChangeEdition = this.onChangeEdition.bind(this);

    this.state = {
      currentEnseignant: {
        id: props.id,
        name: props.name,
        dateofBirth: props.dateofBirth,
        placeofBirth: props.placeofBirth,
        description: props.description, 
        edition:false
      }
    };
  }

  onChangeEdition(){
    this.setState(prevState => ({
      
        edition: true
      
    }));}
  
  onChangeName(e) {
    const name = e.target.value;

    this.setState(prevState => ({
      currentEnseignant: {
          ...prevState.currentEnseignant,
          name: name
        }
      }));
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentEnseignant: {
        ...prevState.currentEnseignant,
        description: description
      }
    }));
  }
  onChangeDateofBirth(e) {
    const dateofBirth = e.target.value;
    
    this.setState(prevState => ({
      currentEnseignant: {
        ...prevState.currentEnseignant,
        dateofBirth: dateofBirth
      }
    }));
  }
  onChangeplaceofBirth(e) {
    const placeofBirth = e.target.value;
    
    this.setState(prevState => ({
      currentEnseignant: {
        ...prevState.currentEnseignant,
        placeofBirth: placeofBirth
      }
    }));
  }

  deleteEnseignant() {    
    console.log(this.state.currentEnseignant.id)
    axios.delete("http://localhost:8000/enseignants/delete?id="+ this.state.currentEnseignant.id)
    .then(res =>  console.log(res));
  window.location = '/enseignants';
     
  }

    render() {
        const { currentEnseignant } = this.state;
        return (
         
            
          <div className="edit-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <p
                      id="name"
                    >{currentEnseignant.name}</p>
                  </div>
            <div className="form-group">
              <label htmlFor="placeofBirth">Place Of birth</label>
              <p
                id="placeofBirth"
                value={currentEnseignant.placeofBirth}
              >{currentEnseignant.placeofBirth}</p>
            </div>
            <div className="form-group">
              <label htmlFor="dateofBirth">date of Birth</label>
              <p
                id="dateofBirth"
              >{currentEnseignant.dateofBirth}</p>
            </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <p
                      id="description"
                    >{currentEnseignant.description}</p>
                  </div>
                </form>

                <button
                  className="badge badge-danger mr-2"
                  onClick={this.deleteEnseignant}
                >
                  Delete
                </button>
    
                <button
                  type="submit"
                  className="badge badge-success"
                  onClick={this.onChangeEdition}
                >
                  Update
                </button>
                {this.state.edition ? (
                <EnseignantsList
                 id= {currentEnseignant.id}
                 name=  {currentEnseignant.name}
                 dateofBirth=  {currentEnseignant.dateofBirth}
                 placeofBirth = {currentEnseignant.placeofBirth}
                 description={currentEnseignant.description}
              />
              
            ) : (
              <div>
                <br />
                <p></p>
              </div>
            )}
          </div>
        );
      }
    }
    




  