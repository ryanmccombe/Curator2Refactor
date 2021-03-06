import {
  GET_STORYLINES_ASYNC,
  GET_STORYLINES_FULFILLED,
  GET_STORYLINES_ERROR,
  EDIT_SECTION,
  DELETE_SECTION,
  ADD_SECTION,
  RESTORE_SECTION,
  REVERT_SECTION
} from '../../Actions/storylines';
import getStorylinesAsync from './getStorylinesAsync';
import getStorylinesFulfilled from './getStorylinesFulfilled';
import getStorylinesError from './getStorylinesError';
import editSection from './editSection';
import deleteSection from './deleteSection';
import addSection from './addSection';
import restoreSection from './restoreSection';
import revertSection from './revertSection';

import { getNewStoryObject } from './helpers';

// TODO: This is a temp development aid - storylines will come from an API eventually
const initialState = [{
  id: 1,
  title: 'Demo Storyline',
  sections: [
    // getNewStoryObject('title'),
    getNewStoryObject('text'),
    getNewStoryObject('twoColumnQuote'),
    getNewStoryObject('image'),
  ]
}];

// This reducer defers to imported functions to handle actions
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STORYLINES_ASYNC: return getStorylinesAsync(state, action);
    case GET_STORYLINES_FULFILLED: return getStorylinesFulfilled(state, action);
    case GET_STORYLINES_ERROR: return getStorylinesError(state, action);
    case EDIT_SECTION: return editSection(state, action);
    case DELETE_SECTION: return deleteSection(state, action);
    case ADD_SECTION: return addSection(state, action);
    case RESTORE_SECTION: return restoreSection(state, action);
    case REVERT_SECTION: return revertSection(state, action);
    default: return state;
  }
}
