import React from 'react'

export default class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Make a new Appointment</h2>
        <form>
          <input name='title' placeholder='Appointment Title'/>
          <input name='appt_time' placeholder='Date and Time'/>
          <input type='submit' value='Make Appointment'/>
        </form>
      </div>
    )
  }
}
