import React from 'react';
import {useAlert} from './useContext_Alert/useContext_AlertContext';

export default function Main() {
  const {show} = useAlert()

  return (
    <>
      <h2> Hello from Context </h2>
      <button className="btn btn-success" onClick={() => show('Text from Main.js')}>Show Alert</button>
    </>
    )
}