import React from "react";

const Filter = (props) => {
    return (
      <div>
        Find countries{" "}
        <input value={props.filter} onChange={props.handleFilterChange}></input>
      </div>
    );
  };
  
  export default Filter;