//import useLocalStorageState from "use-local-storage-state"

export function List({ activities, isGoodWeather, emoji, temp }) {
  const listItems = activities.map((activity) => {
    return (
      <li key={activity.id} goodweather={activity.goodweather}>
        {activity.name}
      </li>
    );
  });

  return (
    <div>
      {isGoodWeather ? (
        <h2>
          {emoji} {temp}° The wether is awesome, go outside and:
        </h2>
      ) : (
        <h2>
          {emoji} {temp}° Stay in and:
        </h2>
      )}

      <ul>{listItems}</ul>
    </div>
  );
}
