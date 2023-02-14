import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const filterActivities = activities.filter(
    (activity) => activity.goodweather === weather.isGoodWeather
  );
  const [weather, setWeather] = useState("");
  useEffect(() => {
    fetch("https://example-apis.vercel.app/api/weather")
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .then(console.log(weather.temperature));
  }, [weather]);
  //const isGoodWeather = weather;
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  return (
    <div className="App">
      <List
        activities={filterActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
