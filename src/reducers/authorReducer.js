import * as types from '../actions/actionTypes';
import initialState from './intitalState';

export default function authorReducer(state = initialState.authors, action = null){
  switch (action.type){
    case types.LOAD_AUTHORS_SUCCESS :
      return action.authors;

    default:
      return state;
  }
}
