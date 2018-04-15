import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

let key = 0;

const generateKey = () => {
  key += 1;
  return `todo-${key}`;
};

const TodoList = (props) => {
  const items = props.items.map((item, index) => (
    <TodoListItem
      key={generateKey()}
      item={item}
      index={index}
      removeItem={props.removeItem}
      markTodoDone={props.markTodoDone}
    />
  ));
  return <ul className="list-group"> {items} </ul>;
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  markTodoDone: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default TodoList;
