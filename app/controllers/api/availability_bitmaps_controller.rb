class Api::AvailabilityBitmapsController < ApplicationController

  def create
    @availability_bitmap = AvailabilityBitmap.new(availability_bitmap_params)
    @availability_bitmap.event_response_id = params[:event_response_id]

    event_response = EventResponse.find_by_id(params[:event_response_id])
    if !event_response
      render_404_error("event response")
    elsif event_response.respondee_user_id != current_user.id
      render_403_error("event response")
    elsif @availability_bitmap.save
      render :show
    else
      render(
        json: @availability_bitmap.errors.full_messages,
        status: 422
      )
    end
  end

  def show
    @availability_bitmap =
      AvailabilityBitmap.find_by(event_response_id: params[:event_response_id])

    if !@availability_bitmap
      render json: {}
    elsif @availability_bitmap.respondee.id != current_user.id
      render_403_error("availability bitmap")
    else
      render :show
    end
  end

  def update
    @availability_bitmap =
      AvailabilityBitmap.find_by(event_response_id: params[:event_response_id])
    # TODO:  fix that you can only add people within your group and can't add yourself

    if !@availability_bitmap
      render_404_error("availability bitmap")
    elsif @availability_bitmap.respondee.id != current_user.id
      render_403_error("availability bitmap")
    elsif @availability_bitmap.update(availability_bitmap_params)
      render :show
    else
      render(
        json: @availability_bitmap.errors.full_messages,
        status: 422
      )
    end
  end

  private
  def availability_bitmap_params
    params.require(:availability_bitmap)
          .permit(:date, :time)
  end

end
