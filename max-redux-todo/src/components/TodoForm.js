import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export class TodoForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddTodo = () => {
    const textValue = this.textRef.current.value;

    this.props.addTodo(textValue);
    this.textRef.current.value = '';
    this.authorRef.current.focus();
  }

  render() {
    return (
      <div>
        <h3>You have {this.props.numberOfTodos}.</h3>
        <div>
          <input ref={this.textRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddTodo}>Add New Task</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfTodos: state.todo.length,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
