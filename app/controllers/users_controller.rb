class UsersController < ApplicationController
    
    # skip_before_action :authorize, only: [:index, :create]
    
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        # byebug
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        # session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params_permit(:username, :password)
    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session[:user_id] === @current_user.id 
    # end

end
