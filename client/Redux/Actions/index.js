// Action Types are stored as constants and imported into reducers, rather than having the same
// "magic strings" duplicated around the code base
export const GET_STORYLINES = 'GET_STORYLINES';

export const GET_STORYLINE = 'GET_STORYLINE';
export const EDIT_STORYLINE = 'EDIT_STORYLINE';
export const REVERT_STORYLINE = 'REVERT_STORYLINE';
export const SAVE_STORYLINE = 'SAVE_STORIES';

export const EDIT_SECTION = 'EDIT_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';
export const RESTORE_SECTION = 'RESTORE_SECTION';
export const REVERT_SECTION = 'REVERT_SECTION';
export const ADD_SECTION = 'ADD_SECTION';
export const SAVE_SECTION = 'SAVE_SECTION';

/*
  Payload:
  id: ID of story to update
  section: ID of section to update
  property: Which property to update on that section
  value: Value to set that property to
 */
export function editSection(payload) {
  return {
    type: EDIT_SECTION,
    payload
  };
}

/*
  Payload:
  id: ID of story to update
  section: ID of section to delete
 */
export function deleteSection(payload) {
  return {
    type: DELETE_SECTION,
    payload
  };
}

/*
  Payload:
  id: ID of story to update
  section: ID of section to delete
 */
export function restoreSection(payload) {
  return {
    type: RESTORE_SECTION,
    payload
  };
}

/*
  Payload:
  id: ID of story to update
  type: Type of section to add
 */
export function addSection(payload) {
  return {
    type: ADD_SECTION,
    payload
  };
}

/*
 Payload:
 id: ID of story to update
 section: ID of the section to add
 */
export function revertSection(payload) {
  return {
    type: REVERT_SECTION,
    payload
  };
}