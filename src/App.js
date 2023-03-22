import { Form } from './Component/Form/Form';

import { useState } from 'react';
import { uid } from 'uid';

import './App.css';

function App() {

  const [activities, setActivities] = useState([])

  function handleAddActivity(newActivity) {
    setActivities([...activities, {id: uid(), ...newActivity}])

    console.log(activities);
  }


  
  return (
    <>
    <Form onAddActivity={handleAddActivity} />
    </>
  )
  
}

export default App;
