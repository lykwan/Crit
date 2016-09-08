class Api::GroupMembershipsController < ApplicationController

  def create
    @group_membership = GroupMembership.new(group_membership_params)
    @group_membership.group_id = params[:group_id]

    group = Group.find_by_id(@group_membership.group_id)
    if !group
      render_404_error("group")
    elsif !group.admins.include?(current_user)
      render_403_error("group")
    elsif @group_membership.save
      render :show
    else
      render(
        json: @group_membership.errors.full_messages,
        status: 422
      )
    end
  end


  def destroy
    @group_membership = GroupMembership.find_by(group_id: params[:group_id],
                    member_user_id: params[:group_membership][:member_user_id])
    if !@group_membership
      render_404_error("group")
    elsif @group_membership.destroy
      render json: {}
    else
      render(
        json: ["Could not destroy group membership"],
        status: 422
      )
    end
  end

  private
  def group_membership_params
    params.require(:group_membership).permit(:member_user_id, :is_admin)
  end

end
