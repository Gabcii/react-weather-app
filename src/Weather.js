import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      date: "Friday 0900",
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      ready: true,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
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

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="me-2"
              />
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3986b1bo304da0tf76e74d198cd0536a";
    let city = "London";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
