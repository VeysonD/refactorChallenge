import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const items = props.items.map((item, index) => (
    <TodoListItem
      key={item.index}
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
