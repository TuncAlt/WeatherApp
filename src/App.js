// import { useState } from "react";
import { Form } from "./components/Form";
import {List} from "./components/List"
import useLocalStorageState from "use-local-storage-state";


function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />

    </div>
  );
}

export default App;
