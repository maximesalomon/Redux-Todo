import React from 'react';


export default class Todo extends React.Component {
  render() {
    const { task, deleteTask, completeTask } = this.props;

    return (
        <>
            <div className='text'>{task.text}</div>
            <div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => completeTask(task.id)}>Mark as completed</button>
            </div>
        </>
    );
  }
}
