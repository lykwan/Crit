class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.event_responses_attributes = my_response_attr
    @event.host_user_id = current_user.id

    group = Group.find_by_id(@event.group_id)
    if !group
      render(
        json: ["Please submit a proper group"],
        status: 404
      )
    elsif !current_user.groups.include?(group)
      render_403_error("group")
    elsif @event.save
      render :show
    else
      render(
        json: @event.errors.full_messages,
        status: 422
      )
    end
  end

  def index
    @events = current_user.events
  end

  def show
    @event = Event.find_by_id(params[:id])
    if !@event
      render_404_error("event")
      return
    end

    group = @event.group
    if !current_user.groups.include?(group)
      render_403_error("event")
    else
      render :show
    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    if !@event
      render_404_error("event")
    elsif @event.host != current_user
      render_403_error("event")
    elsif @event.update(event_params)
      render :show
    else
      render(
        json: @event.errors.full_messages,
        status: 422
      )
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])

    if !@event
      render_404_error("event")
    elsif @event.host != current_user
      render_403_error("event")
    elsif @event.destroy
      render :show
    else
      render(
        json: ["Could not destroy event"],
        status: 422
      )
    end
  end

  def close_poll
    @event = Event.find_by_id(params[:id])

    if !@event
      render_404_error("event")
      return
    elsif @event.host_user_id != current_user.id
      render_403_error("event")
      return
    end

    @event.is_attendees_finalized = true
    if @event.save
      render :show
    else
      render(
        json: @event.errors.full_messages,
        status: 422
      )

  end

  private
  def event_params
    params.require(:event).permit(:title,
                                  :description,
                                  :group_id,
                                  :location,
                                  :img,
                                  :start_time,
                                  :end_time)
  end

  def my_response_attr
    [{
      respondee_user_id: current_user.id,
      response: "definitely"
    }]
  end

end
