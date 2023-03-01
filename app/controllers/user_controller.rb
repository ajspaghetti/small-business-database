class UserController < ApplicationController
    
    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index

    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def user_params

    end

    def not_found
        render json: { error: "User not found"}, status: :not_found
    end

end
