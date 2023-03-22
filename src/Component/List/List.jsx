import "./List.css";

export const List = ({ activities, isGoodWeather, emoji, temp }) => {
  return (
    <div className="section__list">
      <div>
        <h2>{emoji}</h2>
      </div>
      <div>
        <h2>{temp}</h2>
      </div>

      <h2 className="section__title">
        {isGoodWeather
          ? "The Weather is awesome! Go outside and:"
          : "The Weather sucks.. Here is what to do with your time: "}
      </h2>
      <ul className="list">
        {activities.map((activity) => {
          return (
            <li className="list__item" key={activity.id}>
              {activity.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
