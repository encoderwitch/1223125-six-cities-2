import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main';

const App = ({list}) => (
  <Main list={list}/>
);

App.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
};


export default App;