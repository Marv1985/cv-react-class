import React, {Component} from "react";

class Personal extends Component {
  constructor(props){
    super(props);
  }
  
   render(){
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    )
  }
}

export default Personal;