import React, { Component } from "react";
import "/home/marv/the-odin-project/react-projects/cv-project/src/styles/app.css";

class EditWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { records } = this.props;

    return (
      <div>
        {records.map((record, index) => {
          if (records.length - 1 === index) {
            return (
              <div className="borderRight" key={record.id}>
                <div className="gradesEditLeft">
                  <p>Company: {record.company}</p>
                  <p>Position: {record.position}</p>
                  <p>Role: {record.role}</p>
                  <p>Responsibilities: {record.responsibilities}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default EditWork;
