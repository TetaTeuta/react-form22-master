import React, { Component } from "react";
import Form from "./components/form";
import axios from 'axios';

export class List extends React.Component {

  constuctor(props){
    super(props);

    this.state = {
      names: []
    }
  }

  componentDidMount(

  )

getNames(){
  axios.get('https://delicat-baguette-35097.herokuapp.com/api/names')
  .then(res => {
    this.setState(res.data);
    console.log(res.data);
  })
  .catch(err => {
    console.log(error);
  })
}

render(){
  return(
    <ul>{names={getNames}}</ul>
  )
}

}