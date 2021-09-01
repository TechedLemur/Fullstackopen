import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [infoMessage, setInfoMessage] = useState(null);
  const [messageStyle, setMessageStyle] = useState("info");

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.target);

    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the number with the new one?`
        )
      ) {
        const id = persons.find((p) => p.name === newName).id;
        const personObject = {
          name: newName,
          number: newNumber,
        };
        personService.update(id, personObject).then((returnedPerson) => {
          setPersons(persons.map((p) => (p.id !== id ? p : returnedPerson)));
          setMessageStyle("info");
          setInfoMessage(
            `The phone number of ${returnedPerson.name} has been updated`
          );
          setTimeout(() => {
            setInfoMessage(null);
          }, 5000);
        });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setMessageStyle("info");
          setInfoMessage(`${returnedPerson.name} has been added`);
          setTimeout(() => {
            setInfoMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessageStyle("error");
          setInfoMessage(error.response.data.error);
        });
    }
  };

  const removePerson = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      console.log(`Deleting ${name} with id ${id}`);
      personService.remove(id).catch(() => {
        setMessageStyle("error");
        setInfoMessage(`Sorry, ${name} is already deleted from the database`);
        setTimeout(() => {
          setInfoMessage(null);
        }, 5000);
      });
      setPersons(persons.filter((p) => p.id !== id));
    } else {
      console.log("Not deleting person");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} style={messageStyle}></Notification>
      <Filter filter={filter} handleFilterChange={handleFilterChange}></Filter>

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons
        filter={filter}
        removePerson={removePerson}
        persons={persons}
      ></Persons>

      <div>
        debug: {newName} {filter}
      </div>
    </div>
  );
};

export default App;
