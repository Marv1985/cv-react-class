import React, {Component} from "react";

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
          return <p key={task.id}>{task.text}</p>;
          }
        })}
      </div>
    )
  }
}

export default Personal;