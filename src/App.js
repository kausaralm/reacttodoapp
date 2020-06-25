import React, { Component } from 'react'
import './style.css'
import SingleTask from './SingleTask'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      task_title:"",
      task_list:[],
    }
  }
  handleInput = (e) => {
    const{name, value}=e.target
    this.setState({
      [name]:value, 
    })
  }
  addTask = () => {
    const task_title = this.state.task_title;
    const list = {task_title, status: "new"}; //{task_title:task_title}

    let current_list = this.state.task_list;
    current_list.push(list);

    this.setState({
      task_list:current_list,
      task_title:"",
    })
  }
  makeToggleTask = (id) => {
      const new_list = this.state.task_list.map( (l, i) =>{
        if(id==i){
          l.status = l.status =="done" ? "" : "done";
        }
        return l;
      })
      this.setState({
        task_list : new_list
      })
  }

  removeItem= (id) =>{
    const updated_list = this.state.task_list;

    let new_task_list = updated_list.filter(i => {
      if(id !=i.id){
        return i;
      }
    })

    this.setState({
      task_list: new_task_list
    })
    
  }

  render() {
    //<li className="checked">Pay bills</li>
    return (
      <div className="container">
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." name="task_title" value={this.state.task_title} onChange={this.handleInput} />
            <span onclick="newElement()" className="addBtn" onClick={this.addTask}>Add</span>
          </div>

          <ul id="myUL">
           {
             this.state.task_list.map((l, i) => {
               return <SingleTask key={i} id={i} task={l} makeToggle={(id)=>{this.makeToggleTask(id)}}  itemID={(id)=>this.removeItem(id)} />
             })
           }
          </ul>
      </div>
    )
  }
}

