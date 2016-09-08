class Api::EventResponsesController < ApplicationController

  def create
    @event_response = EventResponse.new(event_response_params)
    @event_response.event_id = params[:event_id]
    @event_response.respondee_user_id = current_user.id

    event = Event.find_by_id(@event_response.event_id)
    if !event
      render_404_error("event")
    elsif !current_user.events.include?(event)
      render_403_error("event")
    elsif @event_response.save
      render :show
    else
      render(
        json: @event_response.errors.full_messages,
        status: 422
      )
    end
  end

  def show
    @event_response = EventResponse.find_by(event_id: params[:event_id],
                                            respondee_user_id: current_user.id)
    if !@event_response
      render(
        json: {}
      )
    else
      render :show
    end
  end

  def update
    @event_response = EventResponse.find_by(event_id: params[:event_id],
                                            respondee_user_id: current_user.id)
    if !@event_response
      render_404_error("event response")
    elsif @event_response.update(event_response_params)
      render :show
    else
      render(
        json: @event_response.errors.full_messages,
        status: 422
      )
    end
  end

  def destroy
    @event_response = EventResponse.find_by(event_id: params[:event_id],
                                            respondee_user_id: current_user.id)
    if !@event_response
      render_404_error("event response")
    elsif @event_response.destroy
      render :show
    else
      render(
        json: ["Could not destroy event response"],
        status: 422
      )
    end
  end

  private
  def event_response_params
    params.require(:event_response).permit(:response)
  end

end
