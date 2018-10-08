import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, addPost, createPost } from '../actions/postActions';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';

class PostContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleChange = (e) => {
    this.props.createPost({name: e.target.name, value: e.target.value });
  };

 handleSubmit = (e, title, body) => {
    e.preventDefault();
    const post = {
      title,
      body,
    };
    this.props.addPost(post);
  };

  render() {
    const { posts, post } = this.props;
    return (
      <div>
        <Posts posts={posts} />
        <hr />
        <PostForm
          post={post}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  post: PropTypes.instanceOf(Object).isRequired,
  addPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { posts } = state;
  return {
    posts: posts.items,
    post: posts.item,
  };
};

// map dispatch to props example
// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(fetchPosts())
// });

export default connect(mapStateToProps, { fetchPosts, addPost, createPost })(PostContainer);
