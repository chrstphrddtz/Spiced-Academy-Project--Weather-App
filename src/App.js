import { Form } from './Component/Form/Form';

import { useState } from 'react';

import './App.css';

function App() {

  const [activities, setActivities] = useState({})

  function handleAddActivity(newActivity) {
    setActivities(...activities, newActivity)

  }


  
  return (
    <>
    <Form onAddActivity={handleAddActivity} />
    </>
  )
  
}

export default App;
