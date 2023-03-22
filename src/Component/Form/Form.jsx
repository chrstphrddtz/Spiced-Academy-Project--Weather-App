
export function Form() {

  return (
    <div>
      <form>
          <h2>Add new Activity</h2>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" />

          <label htmlFor="goodWeather">Good-weather Activity:</label>
          <input type="checkbox" name="goodWeather" id="goodWeather" />

          <button type="submit">Submit</button>

      </form>
    </div>
  )
}