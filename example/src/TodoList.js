import React from 'react';
import Todo from './Todo';
import contextComponents from './Context';

const withConsumer = contextComponents.withConsumer;

const TodoList = function (props) {
  const todoList = (todos) => {
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          {...todo}
        />
      );
    });
  };

  return (
    <div className="todo-list">
      { todoList(props.state.todos) }
    </div>
  );
};

export default withConsumer(TodoList);
