import React, { Component } from "react";
import axios from "axios";

export default class PfeCreatePage  extends Component {
  constructor() {
    super();
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: null,
      title: "",
      releaseDate: "",
      createdAt: "",
      description: "", 
    };
  }
  onSubmit(event){
    event.preventDefault();
    axios.post("http://localhost:8000/pfes/new?title=" + this.state.title + "&releaseDate=" + this.state.releaseDate + "&createdAt=" + this.state.createdAt + "&description=" + this.state.description)
    .then(res => console.log(res.data))
    window.location = '/pfes';
  };

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

  render() {
  return(         
        
  <div className="submit-form">
    <h4>Etudiant</h4>
    <form action="/" method="POST" onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Title</label>
        <input
          aria-label="Title"
          type="text"
          className="form-control"
          id="title"
          required
          value={this.state.title}
          onChange={this.onChangeTitle}
          title="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="CreatedAt">Created At</label>
        <input
          aria-label="CreatedAt"
          type="text"
          className="form-control"
          id="CreatedAt"
          required
          value={this.state.createdAt}
          onChange={this.onChangeCreatedAt}
          name="CreatedAt"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ReleaseDate">Release Date</label>
        <input
        aria-label="ReleaseDate"
          type="text"
          className="form-control"
          id="ReleaseDate"
          required
          value={this.state.releaseDate}
          onChange={this.onChangeReleaseDate}
          name="ReleaseDate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">description</label>
        <input
        aria-label="description"
          type="text"
          className="form-control"
          id="description"
          required
          value={this.state.description}
          onChange={this.onChangeDescription}
          name="description"
        />
      </div>
    
      <button data-testid="addPFE" type="submit" className="btn btn-success">
        Submit
      </button>
      </form>
</div>
);
}
}