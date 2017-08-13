import { EDIT_SECTION, DELETE_SECTION, ADD_SECTION, RESTORE_SECTION } from '../../Actions/index';
import editSection from './editSection';
import deleteSection from './deleteSection';
import addSection from './addSection';
import restoreSection from './restoreSection';

import { getNewStoryObject } from './helpers';

// TODO: This is a temp development aid - storylines will come from an API eventually
const initialState = [{
  id: 1,
  title: 'Demo Storyline',
  sections: [
    getNewStoryObject('twoColumnQuote', false),
    getNewStoryObject('image', false),
    getNewStoryObject('text', false),
  ]
}];

// This reducer defers to imported functions to handle actions
export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_SECTION: return editSection(state, action);
    case DELETE_SECTION: return deleteSection(state, action);
    case ADD_SECTION: return addSection(state, action);
    case RESTORE_SECTION: return restoreSection(state, action);
    default: return state;
  }
}
