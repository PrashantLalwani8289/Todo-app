import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <>
        <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
          <h6>{title}</h6>
          <div className='todo-icons'>
            <button className='btn'>
              <span className='mx-1 text-success cursor-pointer' onClick={handleEdit}>
                <i className="fa-solid fa-pen"></i>
              </span>
            </button>
            <button className='btn'>
              <span className='mx-1 text-danger' onClick={handleDelete}>
                <i className="fa-solid fa-trash "></i>
              </span>
            </button>
          </div>
        </li>
      </>
    )
  }
}
