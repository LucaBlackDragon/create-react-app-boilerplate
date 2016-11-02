/**
 * Created by lucab on 02/11/2016.
 */

import { combineReducers } from 'redux';
import counter from './counter';

const app = combineReducers({
  counter,
});

export default app;
