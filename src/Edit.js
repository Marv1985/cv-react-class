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
              <div>
          <label>{this.props.title}</label>
          <input
            onChange={this.props.handleChange}
            defaultValue={task.text}
            type="text"
            id='text'
          ></input>
          </div>
          <div>
          <label>{this.props.num}</label>
          <input
            onChange={this.props.handleChange}
            defaultValue={task.number}
            type="text"
            id='number'
          ></input>
          </div>
            </div>
            }
          })}
    </div>
      )
    }
  }
  
  export default Edit;