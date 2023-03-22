import { Form } from './Component/Form/Form';

// import { useState } from 'react';

import './App.css';

function App() {

  // const [addActivity, setAddActivity] = useState()

  function onConsoleLog() {
    console.log("Test");
  }
  
  return (
    <>
    <Form onAddActivity={onConsoleLog} />
    </>
  )
  
}

export default App;
