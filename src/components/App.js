import React, { Component } from 'react';
import moment from 'moment';

import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import Timer from './Timer';
import './../stylings/App.css';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: [], showTimer: false };
  }

  addItem(todoItem) {
    const { todoItems, length } = this.state;

    todoItems.unshift({
      index: length + 1,
      value: todoItem.newItemValue,
      date: moment().format('ll'),
      done: false,
    });
    this.setState({ todoItems });
  }

  removeItem(itemIndex) {
    const { todoItems } = this.state;

    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems });
  }

  markTodoDone(itemIndex) {
    const { todoItems } = this.state;
    const todo = todoItems[itemIndex];

    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    if (todo.done) {
      todoItems.push(todo);
    } else {
      todoItems.unshift(todo);
    }
    this.setState({ todoItems });
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <button
          onClick={() => this.setState({ showTimer: !this.state.showTimer })}
        >
          Toggle Timer
        </button>
        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}


export default TodoApp;
