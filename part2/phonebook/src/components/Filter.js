import React from "react";

const Filter = (props) => {
  return (
    <div>
      Filter shown with{" "}
      <input value={props.filter} onChange={props.handleFilterChange}></input>
    </div>
  );
};

export default Filter;
