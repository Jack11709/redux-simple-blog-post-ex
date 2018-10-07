import React from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
    const { title, body } = props.post;

    return (
      <div>
        <h2>Post Form</h2>
        <form onSubmit={e => props.handleSubmit(e, title, body)}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input id="title" type="text" name="title" value={title} onChange={props.handleChange} />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea id="body" name="body" value={body} onChange={props.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  post: PropTypes.instanceOf(Object).isRequired,
};

export default PostForm;
