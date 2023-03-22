import './Form.css'

export function Form( { onAddActivity } ) {

  function handleSubmitEvent(event) {
    event.preventDefault();

    const formElements = event.target.elements
    const name = formElements.name.value
    const isForGoodWeather = formElements.goodWeather.checked

    const userActivity = {
      name: name,
      isForGoodWeather: isForGoodWeather
    }

    onAddActivity(userActivity)
    event.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmitEvent} className="form">
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