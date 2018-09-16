import React from 'react'
import ReactDOM from 'react-dom'
import update from 'immutability-helper'
import AppointmentForm from './AppointmentForm'
import { AppointmentList } from './AppointmentList'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
   <Appointments appointments={data} />,
   document.body.appendChild(document.createElement('div')),
 )
})

export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Standup Meeting',
      appt_time: '',
    }
  }

  handleUserInput = (obj) => {
    this.setState(obj)
  }

  handleFormSubmit = () => {
    var appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time
    }
    $.post('/appointments', {appointment: appointment}).done(
      function(data){
        this.addNewAppointment(data);
      }.bind(this)
    )
  }

  addNewAppointment(appointment) {
    var appointments = update(this.state.appointments, {$push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b) {
        return(new Date(a.appt_time) - new Date(b.appt_time));
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <AppointmentForm
          title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentList
          appointments={this.state.appointments}
        />
      </div>
    );
  }
}
