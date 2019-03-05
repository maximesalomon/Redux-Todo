import uuid from 'uuid';
import * as types from '../constants/actionTypes';

export function addTodo(task) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: uuid(),
      task,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    payload: id,
  };
}
