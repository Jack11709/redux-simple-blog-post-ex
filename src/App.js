import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostsContainer from './containers/PostsContainer';
import './App.css';

const App = () => {
    return (
      <Provider store={store}>
        <div className="App">
          <PostsContainer />
        </div>
      </Provider>
    );
};

export default App;
