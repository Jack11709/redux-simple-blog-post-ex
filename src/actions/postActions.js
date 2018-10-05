import { FETCH_POSTS, NEW_POST, CREATE_POST } from './types';

export const fetchPosts = () => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return dispatch({
      type: FETCH_POSTS,
      payload: posts,
    });
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    };
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', config);
    const response = await data.json();
    return dispatch({
      type: NEW_POST,
      payload: response,
    });
  };
};

export const createPost = (post) => {
  return { type: CREATE_POST, payload: post };
};
