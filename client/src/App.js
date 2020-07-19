import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { List } from "./components/list";
import { Button } from "reactstrap";
import axios from "axios";

export function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, surname, email);
    axios
      .post(`https://delicat-baguette-35097.herokuapp.com/api/names`, {
        firstName: name,
        lastName: surname,
        email: email
      })
      .catch(e => {
        console.log("Something went wrong");
      });
  };

  const handleKeyPress = e => {
    if (Event.key === "Enter") {
      e.preventDefault();
      console.log(name, surname, email);
      axios
        .post(`https://delicat-baguette-35097.herokuapp.com/api/names`, {
          firstName: name,
          lastName: surname,
          email: email
        })
        .catch(e => {
          console.log("Something went wrong");
        });
    }
  };

  return (
    <form>
      <input
        className="input__item"
        type="text"
        placeholder="Ime"
        name="firstName"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Prezime"
        name="lastName"
        value={surname}
        onChange={e => setSurname(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
      <Button className="addButton" type="submit" onClick={handleSubmit}>
        Click me to POST data to API
      </Button>
      <p>Min 3 charachters for each input</p>
      <div className="list">
        {" "}
        <List />
      </div>
    </form>
  );
}

export default App;
