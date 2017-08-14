// This file is how reducers are registered with redux - they should be imported here and added to the
// combineReducers function whenever they are created
import { combineReducers } from 'redux';

import storylines from './storylines/index';

const rootReducer = combineReducers({
  storylines,
});

export default rootReducer;