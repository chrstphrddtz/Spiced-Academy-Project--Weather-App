import { Form } from "./Component/Form/Form";
import { List } from "./Component/List/List";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState();
  const [emoji, setEmoji] = useState();
  const [temp, setTemp] = useState();

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id))
  }


  const goodWeatherActivity = activities.filter((activity) => {
    return weather ? activity.isForGoodWeather : !activity.isForGoodWeather;
  });

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/arctic`
        );
        const data = await response.json();
        setWeather(data.isGoodWeather);
        setEmoji(data.condition);
        setTemp(data.temperature);
      } catch (error) {
        console.error(error);
      }
    }
    const interval = setInterval(loadWeather, 5000);
    loadWeather();
    return () => clearInterval(interval);
  }, [weather]);

  

  return (
    <main className="mainSection">
      <h1 className="mainSection__title">Good or Bad Weather Activity</h1>
      <List
        activities={goodWeatherActivity}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather}
        emoji={emoji}
        temp={temp}
      />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
