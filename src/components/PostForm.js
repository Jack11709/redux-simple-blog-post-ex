import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, createPost } from '../actions/postActions';

class PostForm extends React.Component {
  handleChange = (e) => {
    this.props.createPost({name: e.target.name, value: e.target.value });
  };

 handleSubmit = async (e, title, body) => {
    e.preventDefault();
    const post = {
      title,
      body,
    };
    this.props.addPost(post);
  };

  render() {
    const { title, body } = this.props.post;

    return (
      <div>
        <h2>Post Form</h2>
        <form onSubmit={e => this.handleSubmit(e, title, body)}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input id="title" type="text" name="title" value={title} onChange={this.handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea id="body" name="body" value={body} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => {
  const { posts } = state;
  return {
    post: posts.item,
  };
};

export default connect(mapStateToProps, { addPost, createPost })(PostForm);
