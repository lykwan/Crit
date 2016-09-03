class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.event_responses_attributes = my_response_attr
    @event.group_id = params[:group_id]
    @event.host_user_id = current_user.id

    group = Group.find_by_id(params[:group_id])
    if !group
      render_404_error("group")
    elsif !current_user.groups.include?(group)
      render_403_error("event")
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
        json: @event.errors.full_messages,
        status: 422
      )
    end
  end

  private
  def event_params
    params.require(:event).permit(:title,
                                  :description,
                                  :location,
                                  :img,
                                  :is_time_finalized)
  end

  def my_response_attr
    [{
      respondee_user_id: current_user.id,
      response: "definitely_going"
    }]
  end

end
