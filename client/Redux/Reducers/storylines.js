import update from 'react-addons-update';

import { EDIT_SECTION, DELETE_SECTION, ADD_SECTION, RESTORE_SECTION } from '../Actions';

import sectionRegistry from '../../SectionTypes/';


// HELPERS //

function getSectionDefaultContent(type) {
  return sectionRegistry[type].defaultContent;
}

function getStoryIndexFromId(state, id) {
  return state.findIndex(story => story.id === id)
}

function getSectionIndexFromId(state, storyIndex, id) {
  return state[storyIndex].sections.findIndex(section => section.id === id);
}

function getNewStoryObject(type, hasChanged = true) {
  return {
    id: Math.random(), // TODO: better way
    type,
    originalContent: getSectionDefaultContent(type),
    currentContent: getSectionDefaultContent(type),
    isDeleted: false,
    hasChanged
  };
}


// TODO: This will come from API eventually
const initialState = [{
  id: 1,
  title: 'Partition of India',
  sections: [
    getNewStoryObject('text', false),
    getNewStoryObject('twoColumnQuote', false)
  ]
}];

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_SECTION: {
      // Extracting values from the payload
      const { storyId, sectionId, property, value } = action.payload;

      // Find which index the edited storyline is at
      const storyIndex = getStoryIndexFromId(state, storyId);

      // Find which index the edited section is at
      const sectionIndex = getSectionIndexFromId(state, storyIndex, sectionId);

      // Update the story's property with the value
      return update(state, {
        [storyIndex]: {
          sections: {
            [sectionIndex]: {
              hasChanged: { $set: true },
              currentContent: {
                [property]: { $set: value }
              },
            }
          }
        }
      });
    }

    case DELETE_SECTION: {
      // Extracting values from the payload
      const { storyId, sectionId } = action.payload;

      // Find which index the edited storyline is at
      const storyIndex = getStoryIndexFromId(state, storyId);

      // Find which index the edited section is at
      const sectionIndex = getSectionIndexFromId(state, storyIndex, sectionId);

      // Update the story's property with the value
      return update(state, {
        [storyIndex]: {
          sections: {
            [sectionIndex]: {
              isDeleted: { $set: true }
            }
          }
        }
      });
    }

    case ADD_SECTION: {
      // Extracting values from the payload
      const { id, sectionType } = action.payload;

      // Find which index the edited storyline is at
      const storyIndex = getStoryIndexFromId(state, id);

      // Update the story's property with the value
      return update(state, {
        [storyIndex]: {
          sections: {
            $push: [getNewStoryObject(sectionType, true)]
          }
        }
      });
    }

    case RESTORE_SECTION: {
      // Extracting values from the payload
      const { storyId, sectionId } = action.payload;

      // Find which index the edited storyline is at
      const storyIndex = getStoryIndexFromId(state, storyId);

      // Find which index the edited section is at
      const sectionIndex = getSectionIndexFromId(state, storyIndex, sectionId);

      // Update the story's property with the value
      return update(state, {
        [storyIndex]: {
          sections: {
            [sectionIndex]: {
              isDeleted: { $set: false }
            }
          }
        }
      });
    }

    default:
      return state;
  }
}
