import React, { useEffect, useRef, useState } from 'react';


function App() {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const preValue = useRef('');

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  });

  const focus = () => inputRef.current.focus()

  useEffect(() => {
    preValue.current = value
  }, [value])

  return (
    <div>
      <h2> Number of Renders: {renderCount.current} </h2>
      <h3> Previous State: {preValue.current} </h3>
      <input ref={inputRef} type="text" onChange= { e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-primary" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
