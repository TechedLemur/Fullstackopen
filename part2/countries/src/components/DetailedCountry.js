import React from "react";

const DetailedCountry = (props) => {
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
      <img src={c.flag}></img>
    </>
  );
};

export default DetailedCountry;
