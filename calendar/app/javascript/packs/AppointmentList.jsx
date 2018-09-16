import React from 'react'
import Appointment from './Appointment'

export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment
              key={appointment.id}
              appointment={appointment}
            />
          )
        })}
      </div>
    )
  }
}
