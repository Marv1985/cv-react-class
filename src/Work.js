import React, { Component } from "react";
import EditWork from "./components/EditWork";
import "/home/marv/the-odin-project/react-projects/cv-project/src/styles/app.css";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      position: "",
      date: "",
      role: "",
      id: "",
      records: [],
      editcompany: [],
      editposition: [],
      editrole: [],
      editresponsibilities: [],
      workedit: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      company: this.state.editcompany.pop(),
      position: this.state.editposition.pop(),
      role: this.state.editrole.pop(),
      responsibilities: this.state.editresponsibilities.pop(),
    });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      records: this.state.records.concat(this.state),
      editcompany: this.state.editcompany.concat(this.state.company),
      editposition: this.state.editposition.concat(this.state.position),
      editrole: this.state.editrole.concat(this.state.role),
      editresponsibilities: this.state.editresponsibilities.concat(this.state.responsibilities),
      company: "",
      position: "",
      role: "",
      responsibilities: "",
      id: "",
      workedit: false,
    });
  };

  render() {

    const {records} = this.state;

    return (
      <div className="wrapperTwo">
        <form className="borderLeft" onSubmit={this.onSubmitTask}>
          <div className="schools">
            <div>
              <label>Company: </label>
              <input
                name="text"
                onChange={this.handleChange}
                value={this.state.company}
                type="text"
                id="company"
              />
            </div>
            <div>
              <label>Position: </label>
              <input
                name="text"
                onChange={this.handleChange}
                value={this.state.position}
                type="text"
                id="position"
              />
            </div>
            <div>
              <label>Date from and until: </label>
              <input
                name="text"
                onChange={this.handleChange}
                value={this.state.role}
                type="text"
                id="role"
              />
            </div>
            <div>
              {/* buttons */}
              <button type="submit">Add</button>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          </div>
          <div className="grades">
            <p>Role and responsibilities</p>
            <textarea
              onChange={this.handleChange}
              value={this.state.responsibilities}
              id="responsibilities"
            ></textarea>
          </div>
        </form>

        {this.state.workedit ? (
          <div className="borderRight">
            <div className="gradesEditLeft">
              <p>Company: </p>
              <p>Position: </p>
              <p>Date from and until: </p>
              <p>Role and responsibilities: </p>
            </div>
          </div>
        ) : null}
        <EditWork records={records} />
      </div>
    );
  }
}

export default Work;
