import React, { Component } from 'react'

class TodoItem extends React.PureComponent {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)} className='btn btn-success'>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)} className='btn btn-warning'>Delete todo</button>
      </li>
    )
  }

}

export default TodoItem
