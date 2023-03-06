class ZipsController < ApplicationController

    # skip_before_action :authorize

    def index
        zips = Zip.all
        render json: zips, status: :ok
    end

    def show
        zip = Zip.find(params[:id])
        render json: zip, status: :ok
    end
end
