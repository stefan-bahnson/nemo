import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DevTools from './DevTools';

import Duration from './Duration';

import '../sass/main.scss';

const App = ({children}) => {
  return (
    <div>
      <DevTools />
      {children}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    timeLeft: state.duration
  }
}

export default connect(mapStateToProps)(App);

