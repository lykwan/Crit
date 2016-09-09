class Api::AvailabilitiesController < ApplicationController

  def create
    @availabilities = params["availabilities"].keys.map do |id|
      availability = Availability.new(availability_params(id))
      availability.date = Time.iso8601(availability_params(id)[:date])
      availability.user_id = current_user.id
      availability.event_id = params[:event_id]
      availability
    end

    Availability.transaction do
      @availabilities.each do |avail|
        avail.save
      end
    end

    render :index
  end

  def index
    @availabilities =
      Availability.where(event_id: params[:event_id],
                         user_id: current_user.id)
  end

  def update
    @availabilities = params["availabilities"].keys.map do |id|
      date = Time.iso8601(availability_params(id)[:date])
      availability = Availability.find_by(event_id: params[:event_id],
                                          date: date, user_id: current_user.id)
      availability
    end

    Availability.transaction do
      @availabilities.each_with_index do |avail, idx|
        p "got here updating"
        p idx
        p avail
        avail.update(time_slot_bitmap:
                        params["availabilities"][idx.to_s][:time_slot_bitmap])
      end
    end

    render :index
  end


  private
  def availability_params(id)
    params.require(:availabilities).fetch(id)
          .permit(:time_slot_bitmap, :date)
  end

end
