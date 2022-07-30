import React, {Component} from "react";

class Edit extends Component {
    constructor(props){
      super(props);
    }
    
    
     render(){
      const { tasks } = this.props;
  
      return (
        <div>
          {tasks.map((task, index) => {
            if(tasks.length -1 === index){
            return <div key={task.id}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.props.handleChange}
            defaultValue={task.text}
            type="text"
            id="taskInput"
          ></input>
            </div>
            }
          })}
    </div>
      )
    }
  }
  
  export default Edit;