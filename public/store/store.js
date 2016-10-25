import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../components/DevTools';

import duration from '../reducers/duration.reducer';
import date from '../reducers/date.reducer';

const reducers = combineReducers({
  duration,
  date
});

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  DevTools.instrument()
));

export {store}