import React from "react";
import axios from "axios";
import { Button } from "reactstrap";

export class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://delicat-baguette-35097.herokuapp.com/api/names`)
      .then(response => {
        this.setState({
          list: response.data
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  refreshList() {
    fetch("https://delicat-baguette-35097.herokuapp.com/api/names")
      .then(response => response.json())
      .then(data => {
        this.setState({ list: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteName(nameid) {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(
        "https://delicat-baguette-35097.herokuapp.com/api/names/" + nameid,
        {
          method: "DELETE",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
    }
  }

  render() {
    const { list } = this.state;

    if (!list) return <p>List is blank</p>;

    return (
      <div className="names__container">
        {list.map(list => (
          <div className="single_name" key={list._id}>
            {list.firstName}&nbsp;
            {list.lastName}&nbsp;
            {list.email}
            <Button
              className="xbutton"
              onClick={() => this.deleteName(list._id)}
            >
              X
            </Button>
          </div>
        ))}
      </div>
    );
  }
}
