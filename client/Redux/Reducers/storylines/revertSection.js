import update from 'react-addons-update';
import { getStoryIndexFromId, getSectionIndexFromId } from './helpers';

export default (state, action) => {
  // Extracting values from the payload
  const { storyId, sectionId } = action.payload;

  // Find which index the edited storyline is at
  const storyIndex = getStoryIndexFromId(state, storyId);

  // Find which index the edited section is at
  const sectionIndex = getSectionIndexFromId(state, storyIndex, sectionId);

  // Get the original content from that section
  const { originalContent } = state[storyIndex].sections[sectionIndex];

  // Update the section's content with the original content
  return update(state, {
    [storyIndex]: {
      sections: {
        [sectionIndex]: {
          currentContent: { $set: originalContent },
          hasChanged: { $set: false },
        }
      }
    }
  });
};
