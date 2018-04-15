import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const newItemValue = this.state.todo;

    if (newItemValue.length > 0) {
      this.props.addItem({ newItemValue });
      this.setState({
        todo: '',
      });
      event.target.reset();
    }
  }
  handleChange(event) {
    this.setState({
      todo: event.target.value,
    });
  }

  render() {
    return (
      <form id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          id="itemName"
          className="form-control"
          onChange={this.handleChange}
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default TodoForm;
