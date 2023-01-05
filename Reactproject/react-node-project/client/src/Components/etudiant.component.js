import React, { Component } from "react";
import axios from "axios";
import EtudiantsList from "./etudiant-list.component";
export default class Etudiant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.deleteEtudiant = this.deleteEtudiant.bind(this);
    this.onChangeEdition = this.onChangeEdition.bind(this);

    this.state = {
      currentEtudiant: {
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
        currentEtudiant: {
          ...prevState.currentEtudiant,
          name: name
        }
      }));
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentEtudiant: {
        ...prevState.currentEtudiant,
        description: description
      }
    }));
  }
  onChangeDateofBirth(e) {
    const dateofBirth = e.target.value;
    
    this.setState(prevState => ({
      currentEtudiant: {
        ...prevState.currentEtudiant,
        dateofBirth: dateofBirth
      }
    }));
  }
  onChangeplaceofBirth(e) {
    const placeofBirth = e.target.value;
    
    this.setState(prevState => ({
      currentEtudiant: {
        ...prevState.currentEtudiant,
        placeofBirth: placeofBirth
      }
    }));
  }

  deleteEtudiant() {    
    axios.delete("http://localhost:8000/etudiants/delete?id="+ this.state.currentEtudiant.id)
    .then(res =>  console.log(res));
  window.location = '/etudiants';
     
  }

    render() {
        const { currentEtudiant } = this.state;
        return (
         
            
          <div className="edit-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <p
                      id="name"
                    >{currentEtudiant.name}</p>
                  </div>
            <div className="form-group">
              <label htmlFor="placeofBirth">Place Of birth</label>
              <p
                id="placeofBirth"
                value={currentEtudiant.placeofBirth}
              >{currentEtudiant.placeofBirth}</p>
            </div>
            <div className="form-group">
              <label htmlFor="dateofBirth">date of Birth</label>
              <p
                id="dateofBirth"
              >{currentEtudiant.dateofBirth}</p>
            </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <p
                      id="description"
                    >{currentEtudiant.description}</p>
                  </div>
                </form>

                <button
                  className="badge badge-danger mr-2"
                  onClick={this.deleteEtudiant}
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
                <EtudiantsList
                 id= {currentEtudiant.id}
                 name=  {currentEtudiant.name}
                 dateofBirth=  {currentEtudiant.dateofBirth}
                 placeofBirth = {currentEtudiant.placeofBirth}
                 description={currentEtudiant.description}
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
    




  