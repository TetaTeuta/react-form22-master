import React, { Component } from "react";

class Forma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("This is final data", data);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // componentDidMount() {
  //   this.setState({
  //     firstName: null
  //   });
  // }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="firstName"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <button>Save</button>
        </form>
        <p>
          Users: {firstName} {lastName} {email}
        </p>
      </div>
    );
  }
}

export default Form;
