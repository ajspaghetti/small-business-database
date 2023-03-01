class UserController < ApplicationController
    
    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok #, serializer: UserContractsSerializer
    end

    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
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

end
