import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="snow-day" size={36} />
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19 °</span>
            <span className="forecast-temperature-min">10 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}
