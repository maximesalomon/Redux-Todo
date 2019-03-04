import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    render() {
        return (
            <h1>Redux Todo</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      addTodo
    }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
