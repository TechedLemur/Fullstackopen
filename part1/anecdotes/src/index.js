import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [most, setMost] = useState(-1);
  const handleVote = () => {
    if (most < 0) {
      setMost(selected);
    }
    const copy = { ...points };
    copy[selected]++;
    setPoints(copy);
    console.log(copy);
    if (most >= 0 && copy[selected] > copy[most]) {
      setMost(selected);
    }
  };

  const i = anecdotes.length;

  const setRandomQuote = () => {
    let index = Math.round(Math.random() * (i - 1));
    setSelected(index);
    console.log(index);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <table>
        <thead>
          <tr>
            <td>
              <Button handleClick={handleVote} text='Vote'></Button>
            </td>
            <td>
              <Button handleClick={setRandomQuote} text='New quote'></Button>
            </td>
          </tr>
        </thead>
      </table>
      <p>Has {points[selected]} points</p>
      <h1>Anecdote with most votes</h1>
      <div>{most >= 0 ? props.anecdotes[most] : "No votes yet :("}</div>
      {most >= 0 && <p>Has {points[most]} points</p>}
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
