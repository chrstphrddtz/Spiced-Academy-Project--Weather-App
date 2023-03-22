import "./List.css";

export const List = ({ activities }) => {
  return (
    <div>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </div>
  );
};
