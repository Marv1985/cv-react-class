import React, {Component} from "react";
import './app.css';

class Personal extends Component {
  constructor(props){
    super(props);
  }
  
   render(){
    const { tasks } = this.props;

    return (
      <div>
        {tasks.map((task, index) => {
          if(tasks.length -1 === index){
          return <p key={task.id}>Name: {task.text} {<br/>} Number: {task.number} {<br/>} Email: {task.email}</p>;
          }
        })}
      </div>
    )
  }
}

export default Personal;