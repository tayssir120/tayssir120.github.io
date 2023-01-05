import React, { Component } from "react";
import PfeCreatePage from "../Components/PfeCreatePage";

export default class AjouterPfe extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.newPfe = this.newPfe.bind(this);

    this.state = {
      id: null,
      title: "",
      releaseDate: "",
      createdAt: "",
      description: "", 
      published: false,
      submitted: true
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeReleaseDate(e) {
    this.setState({
        releaseDate: e.target.value
    });
  }
  onChangeCreatedAt(e) {
    this.setState({
        createdAt: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    });
  }
 
  newPfe() {
    this.setState({
      id: null,
      title: "",
      releaseDate: "",
      createdAt: "",
      description: "",
    });
  }

  render() {
    return(    
        <div>
       <PfeCreatePage/> 
    </div>
    );
    }
    }