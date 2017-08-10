import update from 'react-addons-update';

import { EDIT_STORY } from '../Actions';

// Sample api response
const initialState = [{
  id: 1,
  title: 'Partition of India',
  sections: [
    {
      id: 1,
      type: 'text'
    }, {
      id: 2,
      type: 'twoColumnQuote'
    }
  ]
}];

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_STORY:
      const { storyId, sectionId, property, value } = action.payload;

      // Find which index the edited storyline is at
      const storyIndex = state.findIndex(story => story.id === storyId);

      // Find which index the edited section is at
      const sectionIndex = state[storyIndex]
        .sections
        .findIndex(section => section.id === sectionId);

      // Update the story's property with the value
      return update(state, {
        [storyIndex]: {
          sections: {
            [sectionIndex]: {
              [property]: value
            }
          }
        }
      });
    default:
      return state;
  }
}
