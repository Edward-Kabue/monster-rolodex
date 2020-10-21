import React, { Component } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <React.StrictMode>
        <div className="App">
          <CardList monsters={this.state.monsters}></CardList>
        </div>
      </React.StrictMode>
    );
  }
}
