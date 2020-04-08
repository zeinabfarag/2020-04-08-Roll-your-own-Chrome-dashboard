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
    const style = {
      backgroundImage: "url(" + this.state.background + ")",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
    return <div style={style} id="app"></div>;
  }
}

export default App;
