import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from './Todo';
import { deleteTodo, completedTodo } from '../actions';


export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>My Tasks</h3>
        <div>
          {
            this.props.todos.map(task => (
              <Todo
                key={task.id}
                task={task}
                completedTodo={this.props.completedTodo}
                deleteTodo={this.props.deleteTodo}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    completedTodo: state.completedTodo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteTodo,
    completedTodo,
    // there are 2 keys missing here!
    // look at the propTypes for hints
    // (or imports at the top)
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
