import React from "react";
const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((part, i) => (
        <Part part={part} key={i}></Part>
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  const result = props.parts.map((part) => part.exercises);
  const tot = result.reduce((a, b) => a + b);
  return <p>Number of exercises {tot}</p>;
};

export default Course;
