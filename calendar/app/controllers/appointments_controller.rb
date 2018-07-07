class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order(appt_time: :asc)
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = @appointments = Appointment.order(appt_time: :asc)
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
