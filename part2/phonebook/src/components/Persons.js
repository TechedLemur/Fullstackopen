import React from "react";

const Persons = (props) => {
  const res = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  );

  return res.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}{" "}
      <button onClick={() => props.removePerson(person.id, person.name)}>
        Delete
      </button>
    </p>
  ));
};

export default Persons;
