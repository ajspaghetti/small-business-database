class UsersController < ApplicationController
    
    skip_before_action :authenticated_user, only: [:create, :show]
    before_action :authorize, only: [:update, :destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        if params[:id]
            render json: User.find(params[:id]), status: :ok, serializer: UserContractsSerializer
        else
            render json: @current_user, status: :ok
        end
    end

    def update
        update_user = User.find(params[:id]).update!
        render json: update_user, status: :accepted
    end

    def destroy
        delete_user = User.delete(params[:id])
        render json: delete_user
        head :no_content
    end

    private

    def user_params
        params_permit(:username, :password, :first_name, :last_name, :user_phone, :user_email)
    end

    def not_found
        render json: { error: "User not found"}, status: :not_found
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session[:user_id] === @current_user.id 
    end

end
