import update from 'react-addons-update';
import { getStoryIndexFromId, getSectionIndexFromId } from './helpers';

export default (state, action) => {
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