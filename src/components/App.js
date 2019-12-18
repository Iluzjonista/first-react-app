import React, { Component } from 'react';
import '../styles/App.css'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
        </div>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <p className="card-text">
              jsonplaceholder + react + bootstrap
            </p>
            <a href="https://jsonplaceholder.typicode.com/posts" className="btn btn-primary">
            JSON
            </a>
          </div>
        </div>
        <div class="row">
        {posts.map(post => (
          <div class="col-sm-3">
            <div className="card" key={post.id}>
              <div className="card-header">
                #{post.id} {post.title}
              </div>
              <div className="card-body">
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div></div>
    );
  }
}

export default App;
