import React, { useState } from "react";
import DetailedCountry from "./DetailedCountry";

const Country = (props) => {
  const [detailed, setDetailed] = useState(false);

  const toggleDetailed = () => setDetailed(!detailed);

  const country = props.country;
  if (!detailed) {
    return (
      <>
        <p>
          {country.name} <button onClick={toggleDetailed}>Show</button>
        </p>
      </>
    );
  } else if (detailed) {
    return (
      <>
        <DetailedCountry country={country}></DetailedCountry>
        <div>
          <button onClick={toggleDetailed}>Hide details</button>
        </div>
      </>
    );
  }
};

export default Country;
