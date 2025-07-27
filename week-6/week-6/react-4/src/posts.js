import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 10) }); // Fetch first 10 posts for brevity
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Something went wrong while loading posts.");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Unable to display posts.</h2>;
    }

    return (
      <div>
        <h1>All Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
