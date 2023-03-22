import { Form } from "./Component/Form/Form";
import { List } from "./Component/List/List";
import { useEffect } from "react";
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

  const isGoodWeather = false

  const goodWeatherActivity = activities.filter((activity) => {
    return isGoodWeather ? activity.isForGoodWeather : !activity.isForGoodWeather
  })


  console.log(activities);



  return (
    <main className="section__main">
      <List activities={goodWeatherActivity} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
