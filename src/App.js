import React, {Component} from "react";
import Personal from "./Personal";
import Edit from "./Edit";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '', 
      number: '',
      id: '',
      tasks: [],
      edit: false,
      name: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true,
      name: false,
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
        [e.target.id]: e.target.value,

    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state),
      text: '', 
      number: '',
      id: '',
      edit: false,
      name: true,
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>

{/* edit change */}
        {this.state.edit ? 
        <Edit tasks={tasks} handleChange={this.handleChange} num='Number' title='Name'/>: null}

{/* default view change */}
         {this.state.name ?  
         <div>
         <div>
         <label>Name</label>
          <input
            name='text'
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
            id='text'
          />
          </div>
          <div>
          <label>Number</label>
           <input
             name='number'
             onChange={this.handleChange}
             value={this.state.number}
             type="text"
             id='number'
           />
           </div>
           </div>
          : null}

          

          <button type="submit">Add</button>
          <button onClick={this.handleEdit}>Edit</button>
        </form>
        <Personal tasks={tasks} />
      </div>
    );
  }
}

export default App;