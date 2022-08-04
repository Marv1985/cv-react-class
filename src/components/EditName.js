import React, { Component } from "react";
import "/home/marv/the-odin-project/react-projects/cv-project/src/styles/app.css";

class EditName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        {tasks.map((task, index) => {
          if (tasks.length - 1 === index) {
            return (
              <div className="details" key={task.id}>
                <p> Name: {task.text}</p>
                <p> Number: {task.number}</p>
                <p> Email: {task.email}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default EditName;
