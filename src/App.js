import React from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  console.log(allNewDice());

  return (
    <div className="App">
      <main>
        <div className="titles">
          <h1 className="app-title">Dice Game</h1>
          <h2>
            Choose a set of dice that have the same value and roll until every
            dice have the same value.{" "}
          </h2>
        </div>
        <div className="dice-container">{diceElements}</div>
        <button onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}
