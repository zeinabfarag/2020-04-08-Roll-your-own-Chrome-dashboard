import React, { Component } from "react";
import "./App.css";

class Weather extends Component {
  state = {
    temp: "",
    pic: "",
    description: "",
  };

  componentDidMount() {
    fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER}&query=Toronto&units=m`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) =>
        this.setState({
          pic: data.current.weather_icons[0],
          description: data.current.weather_descriptions[0],
          temp: data.current.temperature,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="ui card" id="weather">
        <div class="content">
          <div class="image">
            <img
              className="ui mini right floated image"
              src={this.state.pic}
            ></img>
          </div>
          <div> Temparature {this.state.temp}°C</div>
          <div className="description">{this.state.description}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
