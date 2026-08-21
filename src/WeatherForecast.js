import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiKey = "3986b1bo304da0tf76e74d198cd0536a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);
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
