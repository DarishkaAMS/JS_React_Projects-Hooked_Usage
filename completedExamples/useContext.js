import React from 'react';

import Main from './useContext_Main';
import Alert from './useContext_Alert/useContext_Alert';
import {AlertProvider} from './useContext_Alert/useContext_AlertContext'; 


function App() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  )
}

export default App
