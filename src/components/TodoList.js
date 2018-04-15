import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const items = this.props.items.map((item, index) => (
      <TodoListItem
        key={index}
        item={item}
        index={index}
        removeItem={this.props.removeItem}
        markTodoDone={this.props.markTodoDone}
      />
    ));
    return <ul className="list-group"> {items} </ul>;
  }
}

export default TodoList;