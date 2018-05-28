import React, { Component } from 'react';
import components from './Context';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const Provider = components.Provider;

class App extends Component {
  render() {
    return (
      <Provider>
        <TodoForm />
        <TodoList />
      </Provider>
  );
  }
}

export default App;
