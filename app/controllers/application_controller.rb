class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticated_user

  private

  def authenticated_user
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not an authenticated_user"] }, status: :unauthorized unless @current_user
  end

end
