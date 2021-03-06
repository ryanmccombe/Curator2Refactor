import sectionRegistry from '../../../SectionTypes/index';

function getSectionDefaultContent(type) {
  return sectionRegistry[type].defaultContent;
}

function getStoryIndexFromId(state, id) {
  return state.findIndex(story => story.id === id)
}

function getSectionIndexFromId(state, storyIndex, id) {
  return state[storyIndex].sections.findIndex(section => section.id === id);
}

function getNewStoryObject(type, isNew = false) {
  return {
    id: Math.random(), // TODO: better way
    type,
    originalContent: getSectionDefaultContent(type),
    currentContent: getSectionDefaultContent(type),
    isDeleted: false,
    isNew
  };
}

export {
  getSectionDefaultContent,
  getStoryIndexFromId,
  getSectionIndexFromId,
  getNewStoryObject
};
