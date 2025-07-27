import React from 'react';

class Post extends React.Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <h3>{id}. {title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
