import { CALL_API } from 'redux-api-middleware';
import { API_URL } from '../../constants';

export const GET_STORYLINES_ASYNC = 'GET_STORYLINES_ASYNC';
export const GET_STORYLINES_FULFILLED = 'GET_STORYLINES_FULFILLED';
export const GET_STORYLINES_ERROR = 'GET_STORYLINES_ERROR';

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

// Calls API using redux-api-middleware
// https://www.npmjs.com/package/redux-api-middleware
export function getStorylinesAsync() {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}storylines`,
      method: 'GET',
      types: [
        // Action with this type is dispatched immediately when this function is called,
        // to allow any interested containers to be notified (eg, to show loading bar)
        // No payload
        GET_STORYLINES_ASYNC,
        // Action is dispatched when request was successful
        // Payload is the response data from the server
        GET_STORYLINES_FULFILLED,
        // Action is dispatched when request was unsuccessful
        // Payload is the error data
        GET_STORYLINES_ERROR
      ]
    }
  };
}
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