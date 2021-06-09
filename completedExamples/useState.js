import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(() => {
      return computeInitialCounter()
    });

  function computeInitialCounter() {
    console.log("I'm calculating...");
    return Math.trunc(Math.random() * 20);
  };

  function increment () {
    // Single counter usage
    // setCounter(counter + 1)

    // If we want to duplicate setCounter. When we change the state we initialize rendering
    setCounter((previousCounter) => {
      return previousCounter + 1
    });
  };


  const [state, setState] = useState({
    title: "Counter",
    date: Date.now()
  });

  function changeTitle(){
    setState(prev => {
      return {
      ...prev, 
      title: "New Title"
      }
    })
  };

  return (
    <div>
      <h2> Counter: {counter} </h2> 
      <button className="btn btn-success" onClick={increment}> Increase </button>
      <button className="btn btn-primary" onClick={() => { setCounter((previousCounter) => { return previousCounter + 1})}}> Decrease </button>
      
      <button className="btn btn-secondary" onClick={ changeTitle }> Change Title </button>
      <pre>{ JSON.stringify(state, null, 2) }</pre>
    </div>
  );
}

export default App;
