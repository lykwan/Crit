class Api::GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    @group.group_memberships_attributes = group_memberships_attributes
    if @group.save
      render :show
    else
      render(
        json: @group.errors.full_messages,
        status: 422
      )
    end
  end

  def index
    @groups = current_user.groups.includes(:members)
  end

  def show
    @group = Group.find_by_id(params[:id])
    if @group && current_user.groups.include?(@group)
      render :show
    elsif @group
      render_403_error("group")
    else
      render_404_error("group")
    end
  end

  def update
    @group = Group.find_by_id(params[:id])
    if !@group
      render_404_error("group")
    elsif !@group.admins.include?(current_user)
      render_403_error("group")
    elsif @group.update(group_params)
      render :show
    else
      render(
        json: @group.errors.full_messages,
        status: 422
      )
    end
  end

  def destroy
    @group = Group.find_by_id(params[:id])

    if !@group
      render_404_error("group")
    elsif !@group.admins.include?(current_user)
      render_403_error("group")
    elsif @group.destroy
      render :show
    else
      render(
        json: @group.errors.full_messages,
        status: 422
      )
    end
  end

  private
  def group_params
    params.require(:group).permit(:title,
                                  :description,
                                  :is_public)
  end

  def group_memberships_attributes
    [{
      member_user_id: current_user.id,
      is_admin: true
    }]
  end

end
