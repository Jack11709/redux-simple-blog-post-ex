import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends React.Component {
  state={
    title: '',
    body: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

 handleSubmit = async (e, title, body) => {
    e.preventDefault();
    const post = {
      title,
      body,
    };
    this.props.createPost(post);
  };

  render() {
    const { title, body } = this.state;

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
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
