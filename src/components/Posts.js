import React from 'react';
import PropTypes from 'prop-types';

const Posts = (props) => {
    const { posts } = props;
    return (
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
