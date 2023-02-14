import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities((activities) => [...activities, newActivity]);
    console.log(activities);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
