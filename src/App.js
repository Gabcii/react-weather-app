import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather defaultCity="London" />
          <footer className="app-container">
            This project was coded by{" "}
            <a
              href="https://github.com/Gabcii"
              target="_blank"
              rel="noreferrer"
            >
              Gabriella Derzsi{" "}
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://github.com/Gabcii/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and
            <a
              href="https://react-weather-app-gd.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </footer>
        </div>
      </div>
    </div>
  );
}
