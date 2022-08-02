import React, {Component} from "react";
import Personal from "./Personal";
import Edit from "./Edit";
import styles from './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '', 
      number: '',
      email: '',
      id: '',
      tasks: [],
      edit: false,
      name: true,
      results: true,
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
      email: '',
      id: '',
      edit: false,
      name: true,
      results: false
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmitTask}>

{/* edit change */}
        {this.state.edit ? 
        <Edit tasks={tasks} handleChange={this.handleChange} em='Email' num='Number' title='Name'/>: null}

{/* default view change */}
         {this.state.name ?  
         <div className="leftSide">
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
             type="tel"
             pattern="[0-9]+"
             onInvalid={e => e.target.setCustomValidity('Enter a valid telphone number')}
             onInput={e => e.target.setCustomValidity("")}
             id='number'
           />
           </div>
           <div>
          <label>Email</label>
           <input
             name='email'
             onChange={this.handleChange}
             value={this.state.email}
             type="email"
             id='email'
           />
           </div>
           </div>
          : null}

          <button type="submit">Add</button>
          <button onClick={this.handleEdit}>Edit</button>
        </form>

        {/* edit output */}
        <div className="rightSide">
        {this.state.results ?
        <div>
          <p>Name: <br/>Number: <br/>Email: </p>
        </div>: null}
        <Personal tasks={tasks} />
        </div>
      </div>
    );
  }
}

export default App;