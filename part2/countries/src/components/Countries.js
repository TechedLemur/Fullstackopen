import React from "react";
import DetailedCountry from "./DetailedCountry";

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
    const country = res[0];
    return <DetailedCountry country={country}></DetailedCountry>;
  }
  if (numberOfCountries === 0) {
    return "No matches";
  }
};

export default Countries;
