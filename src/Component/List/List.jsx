import "./List.css";
//comment
export const List = ({
  onDeleteActivity,
  activities,
  isGoodWeather,
  emoji,
  temp,
}) => {
  return (
    <div className="listSection">
      <div className="listSection__weatherDisplay">
        <h2 className="listSection__item listSection__emoji">{emoji}</h2>
        <h2 className="listSection__item listSection__temp">{temp}°c</h2>
      </div>

      <h2 className="listSection__title">
        {isGoodWeather
          ? "The Weather is awesome! Go outside and:"
          : "The Weather sucks.. Here is what to do with your time: "}
      </h2>
      <ul className="listSection__list">
        {activities.map((activity) => {
          return (
            <li className="listSection__listItem" key={activity.id}>
              {activity.name}
              <button
                onClick={() => onDeleteActivity?.(activity.id)}
                className="listSection__listButton"
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
