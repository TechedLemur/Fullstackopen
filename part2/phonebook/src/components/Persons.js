import React from "react";

const Persons = (props) => {
  const res = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  );

  return res.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ));
};

export default Persons;
