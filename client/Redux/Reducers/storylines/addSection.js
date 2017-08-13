import update from 'react-addons-update';
import { getStoryIndexFromId, getNewStoryObject } from './helpers';

export default (state, action) => {
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