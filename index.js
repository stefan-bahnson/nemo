import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './public/store/store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './public/components/App';
import Overview from './public/components/Overview';
import Duration from './public/components/Duration';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Overview}/>
        <Route path="moment" component={Duration}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);