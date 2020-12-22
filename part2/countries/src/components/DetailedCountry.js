import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailedCountry = (props) => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [weather, setWeather] = useState({});
  const [isBusy, setBusy] = useState(true);

  const params = {
    access_key: api_key,
    query: props.country.capital,
  };

  useEffect(() => {
    console.log("weather effect");
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        console.log("promise fulfilled");
        setWeather(response.data);
        setBusy(false);
      });
  }, []);

  const c = props.country;
  return (
    <>
      <h1>{c.name}</h1>
      <p> Capital: {c.capital} </p>
      <p> Population: {c.population} </p>
      <h2>Languages</h2>
      <ul>
        {c.languages.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
      <img src={c.flag} width="300"></img>
      {isBusy ? (
        <p>Waitng for weather data...</p>
      ) : (
        <>
          <h2>Weather in {weather.location.name}</h2>
          <p>Temperature: {weather.current.temperature} ℃</p>
          <img src={weather.current.weather_icons[0]}></img>
          <p>
            Wind: {weather.current.wind_speed} km/h direction{" "}
            {weather.current.wind_dir}
          </p>
        </>
      )}
    </>
  );
};

export default DetailedCountry;
