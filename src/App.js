import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    background: "",
  };

  componentDidMount() {
    fetch(
      "https://source.unsplash.com/1600x900/?nature,background"
    ).then((res) => this.setState({ background: res.url }));
  }

  render() {
    return (
      <div id="app">
        <img src={this.state.background} />
      </div>
    );
  }
}

export default App;
