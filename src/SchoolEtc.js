import React, {Component} from "react";
import EditSchool from "./components/EditSchool";
import '/home/marv/the-odin-project/react-projects/cv-project/src/styles/app.css';

class SchoolEtc extends Component {
    constructor() {
      super();

      this.state = {
        school: '', 
        college: '',
        university: '',
        grades: '',
        id: '',
        details: [],
        editschool: [],
        editcollege: [],
        edituniversity: [],
        editgrades: [],
        Schooledit: true,
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleEdit = (e) => {
      e.preventDefault();
      this.setState({
        school: this.state.editschool.pop(),
        college: this.state.editcollege.pop(),
        university: this.state.edituniversity.pop(),
        grades: this.state.editgrades.pop()
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
        details: this.state.details.concat(this.state),
        editschool: this.state.editschool.concat(this.state.school),
        editcollege: this.state.editcollege.concat(this.state.college),
        edituniversity: this.state.edituniversity.concat(this.state.university),
        editgrades: this.state.editgrades.concat(this.state.grades),
        school: '', 
        college: '',
        university: '',
        grades: '',
        id: '',
        Schooledit: false,
      });
    };

    render(){

        const {details} = this.state;

        return(
            <div className="wrapperTwo">
        <form className="borderLeft" onSubmit={this.onSubmitTask}>

          <div className="schools">
        <div>
         <label>School: </label>
          <input
            name='text'
            onChange={this.handleChange}
            value={this.state.school}
            type="text"
            id='school'
          />
          </div>
          <div>
         <label>College: </label>
          <input
            name='text'
            onChange={this.handleChange}
            value={this.state.college}
            type="text"
            id='college'
          />
          </div>
          <div>
         <label>University: </label>
          <input
            name='text'
            onChange={this.handleChange}
            value={this.state.university}
            type="text"
            id='university'
          />
          </div>
          <div>
    {/* buttons */}
          <button type="submit">Add</button>
          <button onClick={this.handleEdit}>Edit</button>

          </div>
          </div>
          <div className="grades">
           <p>Grades</p>
           <textarea onChange={this.handleChange} value={this.state.grades} id="grades"></textarea>
          </div>
          </form>

          {this.state.Schooledit ?
          <div className="borderRight"> 
          
            <div className="gradesEditLeft">
              <p>School: </p>
              <p>College: </p>
              <p>University: </p>
              <p>Grades: </p>
            </div> 
          </div>: null}
          <EditSchool details={details}/>
        </div>
        )
    }
}

export default SchoolEtc;