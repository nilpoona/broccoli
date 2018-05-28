import React, { Component } from 'react';
import components from './Context';

const withConsumer = components.withConsumer;

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleOnClick = () => {
    this.props.handlers.addTodo(this.inputRef.current.value);
  }

  render() {
    return (
      <div className="todo-form">
        <input
          type="text"
          ref={this.inputRef}

        />
        <button
          onClick={this.handleOnClick}
        >
          追加
        </button>
      </div>
    );
  }
}

export default withConsumer(TodoForm);
