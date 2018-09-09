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
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <AppointmentForm/>
        <AppointmentList appointments={this.props.appointments}/>
      </div>
    );
  }
}
