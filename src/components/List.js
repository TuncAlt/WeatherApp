//import useLocalStorageState from "use-local-storage-state"

export function List({activities}) {
    const listItems = activities.map((activity) => {
        return  <li key={activity.id} 
        goodweather={activity.goodweather}
        >{activity.name} - is good for outdoor: {activity.goodweather ? "Yes" : "No"}</li>
    })
  
return (
        <div>
            <ul>{listItems}</ul>
        </div>
)}