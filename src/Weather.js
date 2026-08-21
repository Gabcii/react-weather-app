import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    if (response.data && response.data.temperature) {
      setWeatherData({
        temperature: Math.round(response.data.temperature.current),
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        ready: true,
        wind: response.data.wind.speed,
        iconUrl: response.data.condition.icon_url,
      });
    } else {
      alert("The city does not exist. Please try again!");
    }
  }

  function search() {
    if (!city) return;
    const apiKey = "3986b1bo304da0tf76e74d198cd0536a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
