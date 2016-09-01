class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def render_404_error(item)
    render(
      json: ["Can't find #{item}"],
      status: 404
    )
  end

  def render_403_error(item)
    render(
      json: ["You don't have the permission to act on the #{item}"],
      status: 403
    )
  end
end
