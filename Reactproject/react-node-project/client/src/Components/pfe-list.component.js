import React, { Component } from "react";
import axios from "axios";

export default class PfesList extends Component {
    constructor(props) {
        super(props);
  
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangecreatedAt = this.onChangecreatedAt.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onReset = this.onReset.bind(this);
    
        this.state = {
          id: props.id,
          title: props.title,
          releaseDate: props.releaseDate,
          createdAt: props.createdAt,
          description: props.description, 

        };
      }

      onSubmit(event){
        event.preventDefault();
        console.log(this.state.id)
        axios.put("http://localhost:8000/pfes/edit?id=" + this.state.id + "&title="+ this.state.title + "&releaseDate=" + this.state.releaseDate + "&createdAt=" + this.state.createdAt + "&description=" + this.state.description)
        .then(res => console.log(res.data))
        window.location = '/pfes';
      };

      onChangeTitle(event) {
        this.setState({
          title: event.target.value
        });
      }
      onChangeReleaseDate(event) {
        this.setState({
          releaseDate: event.target.value
        });
      }
      onChangecreatedAt(event) {
        this.setState({
          createdAt: event.target.value
        });
      }
    
      onChangeDescription(event) {
        this.setState({
          description: event.target.value
        });
      }
  
      onReset(event){
        event.preventDefault();
        window.location = '/pfes';
      };
    
  render() {
    const { currentPfe } = this.state;

    return (
        <div className="col-md-6">
        {currentPfe ? (
         <div>
         <br />
         <p>Please click on a PFE...</p>
       </div>
        ) : (
          <form action="/" method="POST" onReset={this.onReset} onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              aria-label="NameETU"
              type="text"
              className="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              aria-label="releaseDate"
              type="text"
              className="form-control"
              id="releaseDate"
              required
              value={this.state.releaseDate}
              onChange={this.onChangeReleaseDate}
              title="releaseDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="createdAt">Created At</label>
            <input
              aria-label="createdAt"
              type="text"
              className="form-control"
              id="createdAt"
              required
              value={this.state.createdAt}
              onChange={this.onChangecreatedAt}
              name="createdAt"
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

