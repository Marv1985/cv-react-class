import React, {Component} from "react";
import './app.css';

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
              <div className="leftSide">
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
            pattern="[0-9]+"
            onInvalid={e => e.target.setCustomValidity('Enter a valid telphone number')}
            onInput={e => e.target.setCustomValidity("")}
            type="text"
            id='number'
          ></input>
          </div>
          <div>
          <label>{this.props.em}</label>
          <input
            onChange={this.props.handleChange}
            defaultValue={task.email}
            type="email"
            id='email'
          ></input>
          </div>
            </div>
            </div>
            }
          })}
    </div>
  
      )
    }
  }
  
  export default Edit;