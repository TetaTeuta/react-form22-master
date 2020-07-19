import React, { Component } from "react";
import Form from "./components/form";
import axios from "axios";

export class List extends Component {
  constuctor(props) {
    super(props);

    this.state = {
      names: []
    };
  }

  componentDidMount() {
    axios
      .get("https://delicat-baguette-35097.herokuapp.com/api/names")
      .then(res => {
        this.setState({
          names: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // getNames(){
  //   axios.get('https://delicat-baguette-35097.herokuapp.com/api/names')
  //   .then(res => {
  //     this.setState(res.data);
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(error);
  //   })
  // }

  render() {
    const { names } = this.state;

    if (!names) return <div>Jebiga</div>;

    return (
      <div>
        {names.map(name => (
          <div key={name._id}>{name.firstName}</div>
        ))}
      </div>
    );
  }
}

export default List;
