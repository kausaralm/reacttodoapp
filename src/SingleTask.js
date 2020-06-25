import React, { Component } from 'react'

export default class SingleTask extends Component {
    handleToggle = (id)=>{
        this.props.makeToggle(id);
    }

   handleClick = (id) =>{
        this.props.itemID(id);
    }

    render() {
        let status = this.props.task.status == "done" ? "checked" : "";
        return <li><span style={{display: "inline-block"}} className={status}  onClick={() =>{this.handleToggle(this.props.id)}} >{this.props.task.task_title}</span>
        <span className="close" onClick = {() =>{this.handleClick(this.props.id)}} >x</span>
   </li> 
 
    }
}
