import React from 'react'

export default class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    var name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <div>
        <h2>Make a new Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='title'
            placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange}
          />
          <input
            name='appt_time'
            placeholder='Date and Time'
            value={this.props.appt_time}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Make Appointment'
          />
        </form>
      </div>
    )
  }
}
