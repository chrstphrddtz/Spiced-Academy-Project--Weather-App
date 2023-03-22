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
    <div className="section__form">
      <form onSubmit={handleSubmitEvent} className="form">
          <h2>Add new Activity</h2>
          <label htmlFor="name" className="form__label">Name:</label>
          <input name="name" id="name" type="text" className="form__input"/>

          <label htmlFor="goodWeather" className="form__label">Good-weather Activity:</label>
          <input type="checkbox" name="goodWeather" id="goodWeather" className="form__input"/>

          <button type="submit" className="form__button">Submit</button>
      </form>
    </div>
  )
}