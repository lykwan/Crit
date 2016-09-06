class Api::ConditionsController < ApplicationController

  def create
    @condition = Condition.new(condition_params)
    @condition.event_response_id = params[:event_response_id]

    event_response = EventResponse.find_by_id(params[:event_response_id])
    if !event_response
      render_404_error("event response")
    elsif event_response.respondee_user_id != current_user.id
      render_403_error("event response")
    elsif @condition.save
      render :show
    else
      render(
        json: @condition.errors.full_messages,
        status: 422
      )
    end
  end

  def show
    @condition =
      Condition.find_by(event_response_id: params[:event_response_id])

    if !@condition
      render json: {}
    elsif @condition.respondee.id != current_user.id
      render_403_error("condition")
    else
      render :show
    end
  end

  def update
    @condition =
      Condition.find_by(event_response_id: params[:event_response_id])
    # TODO:  fix that you can only add people within your group and can't add yourself

    if !@condition
      render_404_error("condition")
    elsif @condition.respondee.id != current_user.id
      render_403_error("condition")
    elsif @condition.update(condition_params)
      render :show
    else
      render(
        json: @condition.errors.full_messages,
        status: 422
      )
    end
  end

  private
  def condition_params
    params.require(:condition)
          .permit(:min_num_people,
                  friend_conditions_attributes: [:friend_user_id, :id, :_destroy]
                 )
  end

end
