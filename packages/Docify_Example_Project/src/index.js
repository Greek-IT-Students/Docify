import React from 'react';
import ReactDOM from 'react-dom';
import LibzyConfig from '../Docify.config';
import LibzyRoot from 'Docify';

ReactDOM.render(
  <LibzyRoot config={LibzyConfig}/>,
  document.getElementById('root')
);