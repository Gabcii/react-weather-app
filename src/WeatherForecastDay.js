import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperatureMaximum = Math.round(props.data.temperature.maximum);

    return `${temperatureMaximum}°`;
  }
  function minimumTemperature() {
    let temperatureMinimum = Math.round(props.data.temperature.minimum);
    return `${temperatureMinimum} °`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="forecast-temperatures">
        <span className="forecast-temperature-maximum">
          {maximumTemperature()}
        </span>
        <span className="forecast-temperature-minimum">
          {minimumTemperature()}
        </span>
      </div>
    </div>
  );
}
