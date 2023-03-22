import "./List.css";

export const List = ({ activities, isGoodWeather }) => {
  return (
    <div>
      <h2>{isGoodWeather ? "The Weather is awesome! Go outside and:" : "The Weather sucks.. Here is what to do with your time: "}</h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </div>
  );
};
