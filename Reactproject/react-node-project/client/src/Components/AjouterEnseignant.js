import React, { Component } from "react";
import EnseignantCreatePage from "../Components/EnseignantCreatePage";

export default class AjouterEnseignant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeplaceofBirth = this.onChangeplaceofBirth.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.newEnseignant = this.newEnseignant.bind(this);

    this.state = {
      id: null,
      name: "",
      dateofBirth: "",
      placeofBirth: "",
      description: "", 
      coverImage: "",
      published: false,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDateofBirth(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeplaceofBirth(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  newEnseignant() {
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
     <div className="submit-form">
    <EnseignantCreatePage/>
    </div>
);
}
}