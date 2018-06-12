import React from 'react';
import { uniqueId } from 'lodash';

import { Todo } from '../../Todo';

export const Component = ({ todo, todos }) => {
  const handleChange = event => this.setState({ todo: event.target.value });

  const handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  const handleClickDelete = index => {
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  };

  todos.forEach((todo, index) => {
    this.state.todos[index] = { ...todo, id: uniqueId() };
  });

  return (
    <div className="todo-list">
      <h1>todos</h1>
      <p><span id="counter">{ todos.length }</span> remaining</p>
      <div>
        {
          todos.length
            ? todos.map((todo, index) =>
              <Todo
                key={todo.id}
                onClickDelete={() => handleClickDelete(index)}
                text={todo.text}
                />
              )
            : 'You\'re all done 🌴'
        }
      </div>
      <div className="todo-input">
        <input
          onChange={handleChange}
          placeholder="..."
          type="text"
          value={todo}
          />
        <button onClick={handleClickAdd}>Add</button>
      </div>
    </div>
  );
};


/*
  state = {
    todo: '',
    todos:
  }

*/