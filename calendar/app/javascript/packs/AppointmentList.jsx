import React from 'react'
import { Appointment } from './Appointment'

export const AppointmentList = ({appointments}) =>
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment
          key={appointment.id}
          appointment={appointment}
        />
      )
    })}
  </div>
