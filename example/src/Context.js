import createContextComponents from 'padokia';

const components = createContextComponents({todos: []}, {
  addTodo: {
    func: function (todo) {
      const todosLength = this.state.todos.length;
      const id = (todosLength > 0) ? todosLength + 1 : 1;

      return {
        todos: this.state.todos.concat({
          id,
          value: todo
        })
      };
    }
  }
});

export default components;
