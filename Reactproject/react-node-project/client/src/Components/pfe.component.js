import React, { Component } from "react";
import axios from "axios";
import PfesList from "../Components/pfe-list.component"

export default class Pfe extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeEdition = this.onChangeEdition.bind(this);
    this.deletePfe = this.deletePfe.bind(this);

    this.state = {
      currentPfe: {
        id: props.id,
        title: props.title,
      releaseDate: props.releaseDate,
      createdAt: props.createdAt,
      description: props.description, 
      edition:false
      }
    };
  }
  onChangeEdition(){
    this.setState(prevState => ({
      
        edition: true
      
    }));}
  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPfe: {
          ...prevState.currentPfe,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentPfe: {
        ...prevState.currentPfe,
        description: description
      }
    }));
  }
  onChangeReleaseDate(e) {
    const releaseDate = e.target.value;
    
    this.setState(prevState => ({
      currentPfe: {
        ...prevState.currentPfe,
        releaseDate: releaseDate
      }
    }));
  }
  onChangeCreatedAt(e) {
    const createdAt = e.target.value;
    
    this.setState(prevState => ({
      currentPfe: {
        ...prevState.currentPfe,
        createdAt: createdAt
      }
    }));
  }

  deletePfe() {    
    axios.delete("http://localhost:8000/pfes/delete?id="+ this.state.currentPfe.id)
    .then(res =>  console.log(res));
  window.location = '/pfes';
  }

    render() {
        const { currentPfe } = this.state;
    
        return (
          <div>
              <div className="edit-form">
                <h4>Pfe</h4>
                <form>
                  <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="id">id</label>
                    <p
                      id="id"
                      value={currentPfe.id}
                    >{currentPfe._id}</p>
                  </div>
                      <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <p
                      id="title"
                      value={currentPfe.title}
                    >{currentPfe.title}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">created At</label>
                    <p
                      id="createdAt"
                    >{currentPfe.createdAt}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">release Date</label>
                    <p
                      id="releaseDate"
                    >{currentPfe.releaseDate}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">description</label>
                    <p
                      id="description"
                    >{currentPfe.description}</p>
                  </div>
               </div>
                </form>
              
                <button
                  className="badge badge-danger mr-2"
                  onClick={this.deletePfe}
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
                <PfesList
                 id= {currentPfe.id}
                 title=  {currentPfe.title}
                 releaseDate=  {currentPfe.releaseDate}
                 createdAt = {currentPfe.createdAt}
                 description={currentPfe.description}
              />
              
            ) : (
              <div>
                <br />
                <p></p>
              </div>
            )}
          </div>
        </div>
        )}
    }

