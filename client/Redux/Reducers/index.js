// This file is how reducers are registered with redux - they should be imported here and added to the
// combineReducers function whenever they are created
import { combineReducers } from 'redux';

import storylines from './storylines/index';

// As we're using the key "counter" in this object, the area of global state that is the responsibility
// of the counter reducer will be: state.counter
const rootReducer = combineReducers({
  storylines,
});

export default rootReducer;