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
    <div className="formSection">
      <form onSubmit={handleSubmitEvent} className="formSection__form">
          <h2>Add new Activity</h2>
          <label htmlFor="name" className="formSection__formLabel">Name:</label>
          <input name="name" id="name" type="text" className="formSection__formInput"/>

          <label htmlFor="goodWeather" className="formSection__formLabel">Good-weather Activity:</label>
          <input type="checkbox" name="goodWeather" id="goodWeather" className="formSection__formInput"/>

          <button type="submit" className="formSection__formButton">Submit</button>
      </form>
    </div>
  )
}