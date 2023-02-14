import { useState } from "react";
import { uid } from "uid";

export const Form = ({ onAddActivity }) => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: uid(),
      name: name,
      goodweather: checked,
    };
    onAddActivity(data);
    setName("");
    setChecked(false);
    event.target.reset();
    event.target.name.focus();
  };
  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="weather">good-weather activity: </label>
        <input
          type="checkbox"
          id="weather"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
