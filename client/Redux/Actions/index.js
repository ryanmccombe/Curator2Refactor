// This is an action creator - it is called by containers in the application that are connected to redux

// Actions Creators are functions that return an Action, which gets sent to every reducer
// An action is a simple object that have an action type and, optionally, a "payload"
// Action type helps reducers identify whether or not they care about and need to react to
// Reducers may inspect the "payload" of the action to determine how state needs to be updated

// Action Types are stored as constants and imported into reducers, rather than having the same
// "magic strings" duplicated around the code base
export const EDIT_STORY = 'EDIT_STORY';

/*
  id: ID of story to update
  section: ID of section to update
  property: Which property to update on that section
  value: Value to set that property to
 */
export function editStory(payload) {
  return {
    type: EDIT_STORY,
    payload
  };
}