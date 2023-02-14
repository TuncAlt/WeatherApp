import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [weather, setWeather] = useState("");
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = weather.isGoodWeather;
  const filteredActivities = activities.filter(
    (activity) => activity.goodweather === isGoodWeather
  );

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    startFetching();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }

  console.log(isGoodWeather);
  return (
    <div className="App">
      <List
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
        emoji={weather.condition}
        temp={weather.temperature}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
