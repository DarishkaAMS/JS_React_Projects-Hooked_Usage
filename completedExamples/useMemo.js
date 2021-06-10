import React, { useEffect, useMemo, useState } from 'react';

function complexCompute(num) {
  console.log('complexCompute')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)
  
  const styles = useMemo(() => ({
    color: colored ? 'blue' : 'black'
  }), [colored]);

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]);
  
  useEffect(()=>{
    console.log("Styles has been changed")
  }, [styles]);

  return (
    <div>
      <h2 style={styles}> Calculated state: {computed} </h2>
      <button className={ 'btn btn-success' } onClick={() => setNumber( prev => prev + 1 )}> Add </button>
      <button className={ 'btn btn-primary' } onClick={() => setNumber( prev => prev - 1 )}> Substract </button>
      < br/>
      < br/>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change color</button>
    </div>
  );
}

export default App;
