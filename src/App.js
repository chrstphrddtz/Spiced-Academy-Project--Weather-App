import { Form } from "./Component/Form/Form";
import { List } from "./Component/List/List";
// import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  const isGoodWeather = true

  const goodWeatherActivity = activities.filter((activity) => {
    return isGoodWeather ? activity.isForGoodWeather : !activity.isForGoodWeather
  })


  console.log(activities);



  return (
    <>
      <List activities={goodWeatherActivity} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
