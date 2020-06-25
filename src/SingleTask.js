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
        return <li className={status} onClick={() =>{this.handleToggle(this.props.id)}} >{this.props.task.task_title}<span className="close" onClick = {(id) =>{this.handleClick(this.props.itemID(id))}} >x</span>
   </li> 
 
    }
}
