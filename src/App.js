// import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = true;
  const filterActivities = activities.filter(
    (activity) => activity.goodweather === isGoodWeather
  );
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  return (
    <div className="App">
      <List activities={filterActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
