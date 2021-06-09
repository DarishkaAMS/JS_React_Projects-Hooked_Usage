import React, { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    // From JSON Placeholder
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h2> Resource: {type} </h2>
      <button className="btn btn-success" onClick={() => { setType('users')}}> Users </button>
      <button className="btn btn-primary" onClick={() => { setType('todos')}}> Todos </button>
      <button className="btn btn-secondary" onClick={() => { setType('posts')}}> Posts </button>
      <pre> {JSON.stringify(pos, null, 2)} </pre>
      <pre> {JSON.stringify(data, null, 2)} </pre>
    </div>
  );
}

export default App;
