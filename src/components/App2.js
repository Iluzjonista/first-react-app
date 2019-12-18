import React, { Component } from 'react';
import '../styles/App.css'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ pictures: json }))
  }
  render() {
    const { pictures } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Simple image posts</h1>
        </div>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="row">
        {pictures.map(image => (
          <div class="col-sm-3">
            <div className="card" key={image.id}>
              <div className="card-header">
                #{image.id} {image.title}
              </div>
              <div className="card-body">
                {/* <p className="card-text">{post.body}</p> */}
                <img src={image.url} class="img-fluid"></img>
              </div>
            </div>
          </div>
        ))}
      </div></div>
    );
  }
}

export default App;
