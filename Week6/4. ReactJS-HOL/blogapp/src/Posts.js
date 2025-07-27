import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    const postList = [
      { id: 1, title: "React Lifecycle Hooks", body: "Learn how React components load, update, and handle errors." },
      { id: 2, title: "componentDidMount Explained", body: "This method is called once the component is rendered on the page." },
      { id: 3, title: "Error Handling in React", body: "Use componentDidCatch to gracefully handle UI errors." },
      { id: 4, title: "Why Use Class Components?", body: "Class components let you use advanced features like lifecycle methods." },
      { id: 5, title: "Project: Blog App", body: "Build a React blog app using lifecycle methods and component-based architecture." }
    ];
    this.setState({ posts: postList });
  }

  componentDidCatch(error, info) {
    alert("An error occurred in the Posts component!");
    console.error("Error caught by componentDidCatch:", error);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
