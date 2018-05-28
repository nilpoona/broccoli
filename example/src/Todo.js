import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo-item">
      { props.value }
    </div>
  );
};

export default Todo;


