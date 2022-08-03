import React, {Component} from "react";
import '/home/marv/the-odin-project/react-projects/cv-project/src/styles/app.css';

class EditSchool extends Component {
    constructor(props){
      super(props);
    }

    render(){

      const {details} = this.props;

      return (
        <div>
          {details.map((detail, index) => {
            if(details.length -1 === index){
            return <div className="borderRight" key={detail.id}> 
            <div className="gradesEditLeft">
              <p>School: {detail.school}</p>
              <p>College: {detail.college}</p>
              <p>University: {detail.university}</p>
              <p>Grades: {detail.grades}</p>
          </div>
        </div>
            }
          })}
        </div>
      )
    }
  }


  export default EditSchool;