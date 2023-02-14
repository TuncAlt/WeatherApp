//import useLocalStorageState from "use-local-storage-state"

export function List({ activities, isGoodWeather }) {
  const listItems = activities.map((activity) => {
    return (
      <li key={activity.id} goodweather={activity.goodweather}>
        {activity.name} - is good for outdoor:{" "}
        {activity.goodweather ? "Yes" : "No"}
      </li>
    );
  });

  return (
    <div>
      {isGoodWeather ? (
        <h2>Good Weather Activity</h2>
      ) : (
        <h2>Bad Weather Activity</h2>
      )}

      <ul>{listItems}</ul>
    </div>
  );
}
