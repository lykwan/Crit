class Api::AvailabilitiesController < ApplicationController

  def create
    @availability = Availability.new(availability_params)
    @availability.event_id = params[:event_id]
    @availability.user_id = current_user.id
    @availability.date = Time.iso8601(params[:availability][:date])

    event = Event.find_by_id(@availability.event_id)
    if !event
      render_404_error("event")
    elsif !current_user.events.include?(event)
      render_403_error("event")
    elsif @availability.save
      render :show
    else
      render(
        json: @availability.errors.full_messages,
        status: 422
      )
    end
  end

  def show
    @availability =
      Availability.find_by(event_id: params[:event_id],
                           user_id: current_user.id)

    if !@availability
      render(
        json: {}
      )
    else
      render :show
    end
  end

  def update
    @availability =
      Availability.find_by(event_id: params[:event_id],
                          user_id: current_user.id)
    @availability.date = Time.iso8601(params[:availability][:date])

    if !@availability
      render_404_error("availability")
    elsif @availability.update(availability_params)
      render :show
    else
      render(
        json: @availability.errors.full_messages,
        status: 422
      )
    end
  end

  private
  def availability_params
    params.require(:availability)
          .permit(:time_slot_bitmap)
  end


end
