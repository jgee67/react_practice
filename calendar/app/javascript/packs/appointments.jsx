import React from 'react'
import ReactDOM from 'react-dom'
import AppointmentForm from './AppointmentForm'
import AppointmentList from './AppointmentList'

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

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <AppointmentForm
          title={this.state.title}
          appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
        />
        <AppointmentList
          appointments={this.state.appointments}
        />
      </div>
    );
  }
}
