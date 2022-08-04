import React, { Component } from "react";
import EditName from "./components/EditName";
import "./styles/app.css";

class NameEtc extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      number: "",
      email: "",
      id: "",
      tasks: [],
      editname: [],
      editnumber: [],
      editemail: [],
      results: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      text: this.state.editname.pop(),
      number: this.state.editnumber.pop(),
      email: this.state.editemail.pop(),
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
      tasks: this.state.tasks.concat(this.state),
      editname: this.state.editname.concat(this.state.text),
      editnumber: this.state.editnumber.concat(this.state.number),
      editemail: this.state.editemail.concat(this.state.email),
      text: "",
      number: "",
      email: "",
      id: "",
      results: false,
    });
  };

  /* render page */
  render() {
    const { tasks } = this.state;

    return (
      <div>
        <div className="wrapperOne">
          <form className="border" onSubmit={this.onSubmitTask}>
            <div className="leftSide">
              <div>
                <label>Name:</label>
                <input
                  name="text"
                  onChange={this.handleChange}
                  value={this.state.text}
                  type="text"
                  id="text"
                />
              </div>
              <div>
                <label>Number:</label>
                <input
                  name="number"
                  onChange={this.handleChange}
                  value={this.state.number}
                  type="tel"
                  pattern="[0-9]+"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Enter a valid telphone number")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  id="number"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  id="email"
                />
              </div>
            </div>
            <div className="buttonsTop">
              {/* buttons */}
              <button type="submit">Add</button>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          </form>

          {/* edit output */}
          <div className="rightSide">
            {this.state.results ? (
              <div>
                <p>Name: </p>
                <p>Number: </p>
                <p>Email: </p>
              </div>
            ) : null}
            <EditName tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default NameEtc;
