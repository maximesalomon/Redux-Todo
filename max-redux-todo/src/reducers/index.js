import dummyTasks from './constants/dummyTaks';
import * as types from '../constants/actionTypes';

function tasks(state = dummyTasks, action) {
  switch (action.type) {
    case types.ADD_QUOTE:
      return state.concat(action.payload);
    case types.DELETE_QUOTE:
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
}

export default tasks;