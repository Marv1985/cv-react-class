import React, {Component} from "react";
import Personal from "./Personal";
import uniqid from "uniqid";
import Edit from "./Edit";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
      edit: false,
      name: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true,
      name: false
    })
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
      edit: false,
      name: true
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>

        {this.state.edit ? 
        <Edit tasks={tasks} handleChange={this.handleChange}/>: null}

         {this.state.name ?  
         <div>
         <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          </div>: null}

          <button type="submit">Add Task</button>
          <button onClick={this.handleEdit}>Edit</button>
        </form>
        <Personal tasks={tasks} />
      </div>
    );
  }
}

export default App;