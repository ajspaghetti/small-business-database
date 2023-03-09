class UsersController < ApplicationController
    
    skip_before_action :authenticated_user, only: [:create, :show]
    before_action :authorize, only: [:update, :destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: @user, status: :created
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def show
        if params[:id]
            render json: User.find(params[:id]), status: :ok
        else
            render json: @current_user, status: :ok
        end
    end

    def index
        render json: User.all, status: :ok
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render json: @user, status: :accepted
        else
            render json: { error: "User update failed"}, status: :invalid
        end
    end

    def destroy
        render json: User.find(params[:id]).destroy!
        head :no_content
    end

    def index
        contracts = Contract.where(:user_id => params[:id])
        contracts.to_json
    end

    private

    def user_params
        params.require(:username).permit(:password)
    end

    def not_found
        render json: { error: "User not found" }, status: :not_found
    end

    def invalid
        render json: { error: "User update failed"}, status: :invalid
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session[:user_id] === @current_user.id 
    end

end
