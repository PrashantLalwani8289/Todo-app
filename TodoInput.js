import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            <div className='card card-body my-3'>
                <form  onSubmit={handleSubmit}>
                    <div className="input-group d-flex align-item-center justify-center">
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white' style={{"height" : "38px"}}>
                                <i className="fa-solid fa-book"></i>
                            </div>
                        </div>
                        <input type="text" className='form-control text-capitalize' placeholder='add a todo item' value={item} onChange={handleChange}></input>
                    </div>
                    <div className="d-grid gap-2">
                    {!editItem && <button type='submit' disabled={item.length > 0 ? false : true} className='btn btn-primary mt-3'>add item</button>}
                    { editItem && <button type='submit' disabled={item.length > 0 ? false : true} className='btn btn-success mt-3'>edit item</button>}
                    </div>
                </form>

            </div>
        )
    }
}
