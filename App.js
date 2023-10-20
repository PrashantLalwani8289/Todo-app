import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    items:[],
    id:uuidv4(),
    item : '',
    editItem : false
  }
  handleChange=e=>{
    this.setState({item: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem={id:this.state.id,title:this.state.item};
    let updatedItems = [...this.state.items,newItem];
    this.setState({items:updatedItems,item : "",id:uuidv4(),editItem: false});
  }
  handleClear = () => {
    this.setState({items:[]});
  }
  handleDelete = (id) => {
    let newItems = this.state.items.filter( item => {
      return id !== item.id;
    })
    this.setState({items : newItems});
  }
  handleEdit = (id) => {

    let updatedItems = this.state.items.filter(item => {
      return id !== item.id;
    })
    let selectedItem = this.state.items.find( item => {
      return id === item.id;
      });
    this.setState({items : updatedItems, item : selectedItem.title, editItem : true, id : id});
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                Todo Input
              </h3>
              <TodoInput item={this.state.item} editItem = {this.state.editItem} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}></TodoInput>
              <TodoList items ={this.state.items} handleClear = {this.handleClear} handleDelete= {this.handleDelete} handleEdit = {this.handleEdit}></TodoList>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
