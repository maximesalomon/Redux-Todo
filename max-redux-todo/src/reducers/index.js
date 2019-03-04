import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: null,
      task: "",
      completed: null,
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {todos: [...state.todos, { 
        id: state.todos.length,
        value: action.addedTodo,
        completed: false,
      }]}
  default:
    return state;
  }
}