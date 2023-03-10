class ZipsController < ApplicationController
    include ActionController::Cookies

    skip_before_action :authenticated_user

    def index
        zips = Zip.all
        render json: zips, status: :ok
    end

    def show
        zip = Zip.find(params[:id])
        render json: zip, status: :ok
    end
end
