import { GET_ERRORS } from '../actions/types.js';

const initialState = {};

export default function (state = initialState, action) {
  if (action.type === GET_ERRORS) {
    return action.payload;
  }
  return state;
}