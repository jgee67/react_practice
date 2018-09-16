import React from 'react'
import Datetime from 'react-datetime'

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

  setApptTime = (e) => {
    var name = 'appt_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    var inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <h2>Make a new Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange}
          />
          <Datetime
            input={false}
            open={true}
            inputProps={inputProps}
            value={this.props.appt_time}
            onChange={this.setApptTime}
          />
          <input
            type='submit'
            value='Make Appointment'
            className='submit-button'
          />
        </form>
      </div>
    )
  }
}
