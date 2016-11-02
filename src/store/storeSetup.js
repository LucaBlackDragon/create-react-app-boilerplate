/**
 * Created by lucab on 02/11/2016.
 */

import { createStore, compose /* , applyMiddleware */ } from 'redux';
import rootReducer from './reducers/root';
//import DevTools from './devTools';
import { composeWithDevTools } from 'remote-redux-devtools';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  console.log('Setup redux-remote-devtools');
  composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
}

const storeEnhancer = composeEnhancers(
  // Middleware you want to use in development:
  //applyMiddleware(d1, d2, d3),
);

export default function setup() {
  return createStore(rootReducer, {}, storeEnhancer);
};