import React, { Component } from 'react';

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

    if (this.state.todo.length > 0) {
      this.props.addItem({ newItemValue });
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
      <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
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

export default TodoForm;
