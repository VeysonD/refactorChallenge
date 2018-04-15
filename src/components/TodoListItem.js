import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    const index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }
  onClickDone() {
    const index = parseInt(this.props.index, 10);
    this.props.markTodoDone(index);
  }
  render() {
    const todoClass = this.props.item.done ? 'todoItem done' : 'todoItem undone';
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          <span>{this.props.item.value}</span>
          <span className="date">{`Added: ${this.props.item.date}`}</span>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  index: PropTypes.number.isRequired,
  markTodoDone: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoListItem;
