import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodUp = () => setGood(good + 1);
  const neutralUp = () => setNeutral(neutral + 1);
  const badUp = () => setBad(bad + 1);

  return (
    <div>
      <Header text='Give feedback'></Header>
      <Button handleClick={goodUp} text='Good'></Button>
      <Button handleClick={neutralUp} text='Neutral'></Button>
      <Button handleClick={badUp} text='Bad'></Button>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;

  if (total == 0) {
    return <p>No feedback given.</p>;
  }

  const avg = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? good / total : 0;

  return (
    <table>
      <Header text='Statistics'></Header>

      <Stat name='Good:' value={good}></Stat>

      <Stat name='Neutral:' value={neutral}></Stat>

      <Stat name='Bad:' value={bad}></Stat>

      <Stat name='All:' value={total}></Stat>

      <Stat name='Average:' value={avg}></Stat>

      <Stat name='Positive:' value={positive + " %"}></Stat>
    </table>
  );
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Stat = ({ name, value }) => (
  <tr>
    <th scope='row'>{name}</th>
    <td>{value}</td>
  </tr>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
ReactDOM.render(<App />, document.getElementById("root"));
