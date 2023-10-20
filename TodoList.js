import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    const {items , handleClear,handleDelete,handleEdit} = this.props;
    return (
      <>
        <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'>todo list</h3>
            {items.map(item => {
                return <TodoItem key={item.id} handleEdit ={() => {handleEdit(item.id)}} handleDelete = {() => {handleDelete(item.id)}}  title={item.title} />
            })}
            <div className="d-grid gap-2">
            <button type='button' disabled={items.length > 0 ? false : true} className='btn btn-danger text-capitalize mt-5' onClick={handleClear}>Clear List</button>
            </div>
        </ul>
      </>
    )
  }
}
