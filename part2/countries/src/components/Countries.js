import React from "react";

const Countries = (props) => {
  const res = props.countries.filter((c) =>
    c.name.toLowerCase().includes(props.filter.toLowerCase())
  );

  const numberOfCountries = res.length;
  console.log("Filter gives ", numberOfCountries, "countries");

  if (numberOfCountries > 10) {
    return "Too many matches, specify another filter";
  }

  if (numberOfCountries > 1) {
    return res.map((country) => <p key={country.name}>{country.name}</p>);
  }

  if (numberOfCountries === 1) {
    return res.map((c) => (
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
        <img src={c.flag}></img>
      </>
    ));
  }
  if (numberOfCountries === 0) {
    return "No matches";
  }
};

export default Countries;
